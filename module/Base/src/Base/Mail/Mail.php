<?php
namespace Base\Mail;

use Base\Mail\PHPMailer;

use Zend\Mail\Transport\Smtp as SmtpTransport;
use Zend\Mail\Message;

use Zend\View\Model\ViewModel;

use Zend\Mime\Message as MimeMessage;
use Zend\Mime\Part as MimePart;

class Mail 
{

    protected $transport;
    protected $view;
    protected $body;
    protected $message;
    protected $subject;
    protected $to;
    protected $data;
    protected $page;
    protected $attach;
    
    public function __construct(SmtpTransport $transport, $view, $page) 
    {
        $this->transport = $transport;
        $this->view = $view;
        $this->page = $page;
    }
    
    /**
     * @return the $data
     */
    public function getData()
    {
        return $this->data;
    }

    public function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    public function setTo($to)
    {
        $this->to = $to;
        return $this;
    }

    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }
    
    public function renderView($page, array $data){
        $model = new ViewModel;
        $model->setTemplate("mailer/{$page}.phtml");
        $model->setOption('has_parent',true);
        $model->setVariables($data);
        
        return $this->view->render($model);
    }
    
    public function prepare(){        
        $html = new MimePart($this->renderView($this->page, $this->data));
        $html->type = "text/html";

        $body = new MimeMessage();
        $body->setParts(array($html));
        $this->body = $body;

        $config = $this->transport->getOptions()->toArray();
        $to = ($this->to)?$this->to:$config['connection_config']['from'];
        $this->setTo($to);
        $this->message = new Message;
        $this->message->addFrom($config['connection_config']['from'],"Mais Escola de Neg&oacute;cios")      
                ->addTo($this->to)
                ->setSubject($this->subject)
                ->setBody($this->body);

        return $this;
    }
    
    /**
     * @return the $body
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * @param \Zend\Mime\Message $body
     */
    public function setBody($body)
    {
        $this->body = $body;
    }

    public function send($service,$subject = null){
        $data = $this->data;
        $configuracoes = $service->getConfigurationMail()['mail'];
        $ssl = $configuracoes['connection_config']['ssl'];
        $host = $configuracoes['host'];
        $port = $configuracoes['connection_config']['port'];
        $username = $configuracoes['connection_config']['username'];
        $password = $configuracoes['connection_config']['password'];

        if(isset($data['from']) && !empty($data['from'])){
            //$data['from'] = array('email@email.com' => 'name')
            $from = $data['from'];
        }else{
            $from = array(
                $configuracoes['connection_config']['from'] => $configuracoes['connection_config']['name_from']
            );
        }

        if(isset($data['to']) && !empty($data['to'])){
            //$data['from'] = array('email@email.com' => 'name')
            $to = $data['to'];
        }else{
            return array('result' => false,'msg' => 'Email sem destinatário!');
        }

        $bodyMail = utf8_decode($this->getBody()->getPartContent(0));
        if(strstr($_SERVER['HTTP_HOST'],'.dev.br') || strstr($_SERVER['HTTP_HOST'],'localhost')){
            $opt['ssl']['verify_peer'] = FALSE;
            $opt['ssl']['verify_peer_name'] = FALSE;
        }

        // Create the Transport
        $transport = (new \Swift_SmtpTransport($host,$port,$ssl))
            ->setStreamOptions($opt)
            ->setUsername($username)
            ->setPassword($password);

        // Create the Mailer using your created Transport
        $mailer = new \Swift_Mailer($transport);

        // Create a message
        $message = (new \Swift_Message($subject))
            ->setFrom($from)
            ->setTo($to)
            ->setBody(utf8_encode($bodyMail),'text/html');

        if($this->getAttach() != '')
        {
            $files = $this->getAttach();
            if(!empty($files)){
                foreach($files as $file)
                {
                    $message->attach(\Swift_Attachment::fromPath($file));
                }
            }
        }

        // Send the message
        $result = $mailer->send($message);

        if($result) {
            return array('result' => true,'msg' => 'Email enviado com sucesso!');
        } else {
            return array('result' => false,'msg' => 'Houve algum erro ao enviar o e-mail!');
        }
    }
    
    /**
     * @return the $message
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @param \Zend\Mail\Message $message
     */
    public function setMessage($message)
    {
        $this->message = $message;
    }

    public function attachFile($path){
        $this->setAttach($path);
    }

    /**
     * @return mixed
     */
    public function getAttach()
    {
        return $this->attach;
    }

    /**
     * @param mixed $attach
     */
    public function setAttach(array $attach)
    {
        $this->attach = $attach;
    }
}
