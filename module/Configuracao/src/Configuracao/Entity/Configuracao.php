<?php
namespace Configuracao\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Configuracao
 *
 * @ORM\Table(name="configuracao")
 * @ORM\Entity
 */
class Configuracao
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="criado_em", type="datetime", nullable=false)
     */
    private $criado_em;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="atualizado_em", type="datetime", nullable=true)
     */
    private $atualizado_em;

    /**
     * @var boolean
     *
     * @ORM\Column(name="cabecalho_fixo", type="boolean", nullable=true)
     */
    private $cabecalho_fixo;

    /**
     * @var boolean
     *
     * @ORM\Column(name="navegacao_fixa", type="boolean", nullable=true)
     */
    private $navegacao_fixa;

    /**
     * @var boolean
     *
     * @ORM\Column(name="navegacao_minificada", type="boolean", nullable=true)
     */
    private $navegacao_minificada;

    /**
     * @var boolean
     *
     * @ORM\Column(name="esconder_navegacao", type="boolean", nullable=true)
     */
    private $esconder_navegacao;

    /**
     * @var boolean
     *
     * @ORM\Column(name="navegacao_topo", type="boolean", nullable=true)
     */
    private $navegacao_topo;

    /**
     * @var boolean
     *
     * @ORM\Column(name="layout_caixa", type="boolean", nullable=true)
     */
    private $layout_caixa;

    /**
     * @var boolean
     *
     * @ORM\Column(name="conteudo_envio", type="boolean", nullable=true)
     */
    private $conteudo_envio;

    /**
     * @var boolean
     *
     * @ORM\Column(name="sem_sobreposicao", type="boolean", nullable=true)
     */
    private $sem_sobreposicao;

    /**
     * @var boolean
     *
     * @ORM\Column(name="off_canvas", type="boolean", nullable=true)
     */
    private $off_canvas;

    /**
     * @var boolean
     *
     * @ORM\Column(name="fonte_conteudo_maior", type="boolean", nullable=true)
     */
    private $fonte_conteudo_maior;

    /**
     * @var boolean
     *
     * @ORM\Column(name="texto_contraste", type="boolean", nullable=true)
     */
    private $texto_contraste;

    /**
     * @var boolean
     *
     * @ORM\Column(name="daltonimsmo", type="boolean", nullable=true)
     */
    private $daltonimsmo;

    /**
     * @var boolean
     *
     * @ORM\Column(name="pre_carregamento_dentro", type="boolean", nullable=true)
     */
    private $pre_carregamento_dentro;

    /**
     * @var boolean
     *
     * @ORM\Column(name="limpar_fundo_pagina", type="boolean", nullable=true)
     */
    private $limpar_fundo_pagina;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ocultar_icone_navegacao", type="boolean", nullable=true)
     */
    private $ocultar_icone_navegacao;

    /**
     * @var boolean
     *
     * @ORM\Column(name="desabilitar_animacao", type="boolean", nullable=true)
     */
    private $desabilitar_animacao;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ocultar_cartao_informacao", type="boolean", nullable=true)
     */
    private $ocultar_cartao_informacao;

    /**
     * @var boolean
     *
     * @ORM\Column(name="subtitulo_lean", type="boolean", nullable=true)
     */
    private $subtitulo_lean;

    /**
     * @var boolean
     *
     * @ORM\Column(name="navegacao_hierarquica", type="boolean", nullable=true)
     */
    private $navegacao_hierarquica;

    /**
     * @var string
     *
     * @ORM\Column(name="tamanho_fonte", type="string", length=5,nullable=true)
     */
    private $tamanho_fonte;

    public function __construct(array $options = array())
    {
        $this->criado_em = new \DateTime("now");
        $this->atualizado_em = new \DateTime("now");
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return \DateTime
     */
    public function getCriadoEm()
    {
        return $this->criado_em;
    }

    /**
     * @param \DateTime $criado_em
     */
    public function setCriadoEm($criado_em)
    {
        $this->criado_em = $criado_em;
    }

    /**
     * @return \DateTime
     */
    public function getAtualizadoEm()
    {
        return $this->atualizado_em;
    }

    /**
     * @param \DateTime $atualizado_em
     */
    public function setAtualizadoEm($atualizado_em)
    {
        $this->atualizado_em = $atualizado_em;
    }

    /**
     * @return bool
     */
    public function isCabecalhoFixo()
    {
        return $this->cabecalho_fixo;
    }

    /**
     * @param bool $cabecalho_fixo
     */
    public function setCabecalhoFixo($cabecalho_fixo)
    {
        $this->cabecalho_fixo = $cabecalho_fixo;
    }

    /**
     * @return bool
     */
    public function isNavegacaoFixa()
    {
        return $this->navegacao_fixa;
    }

    /**
     * @param bool $navegacao_fixa
     */
    public function setNavegacaoFixa($navegacao_fixa)
    {
        $this->navegacao_fixa = $navegacao_fixa;
    }

    /**
     * @return bool
     */
    public function isNavegacaoMinificada()
    {
        return $this->navegacao_minificada;
    }

    /**
     * @param bool $navegacao_minificada
     */
    public function setNavegacaoMinificada($navegacao_minificada)
    {
        $this->navegacao_minificada = $navegacao_minificada;
    }

    /**
     * @return bool
     */
    public function isEsconderNavegacao()
    {
        return $this->esconder_navegacao;
    }

    /**
     * @param bool $esconder_navegacao
     */
    public function setEsconderNavegacao($esconder_navegacao)
    {
        $this->esconder_navegacao = $esconder_navegacao;
    }

    /**
     * @return bool
     */
    public function isNavegacaoTopo()
    {
        return $this->navegacao_topo;
    }

    /**
     * @param bool $navegacao_topo
     */
    public function setNavegacaoTopo($navegacao_topo)
    {
        $this->navegacao_topo = $navegacao_topo;
    }

    /**
     * @return bool
     */
    public function isLayoutCaixa()
    {
        return $this->layout_caixa;
    }

    /**
     * @param bool $layout_caixa
     */
    public function setLayoutCaixa($layout_caixa)
    {
        $this->layout_caixa = $layout_caixa;
    }

    /**
     * @return bool
     */
    public function isConteudoEnvio()
    {
        return $this->conteudo_envio;
    }

    /**
     * @param bool $conteudo_envio
     */
    public function setConteudoEnvio($conteudo_envio)
    {
        $this->conteudo_envio = $conteudo_envio;
    }

    /**
     * @return bool
     */
    public function isSemSobreposicao()
    {
        return $this->sem_sobreposicao;
    }

    /**
     * @param bool $sem_sobreposicao
     */
    public function setSemSobreposicao($sem_sobreposicao)
    {
        $this->sem_sobreposicao = $sem_sobreposicao;
    }

    /**
     * @return bool
     */
    public function isOffCanvas()
    {
        return $this->off_canvas;
    }

    /**
     * @param bool $off_canvas
     */
    public function setOffCanvas($off_canvas)
    {
        $this->off_canvas = $off_canvas;
    }

    /**
     * @return bool
     */
    public function isFonteConteudoMaior()
    {
        return $this->fonte_conteudo_maior;
    }

    /**
     * @param bool $fonte_conteudo_maior
     */
    public function setFonteConteudoMaior($fonte_conteudo_maior)
    {
        $this->fonte_conteudo_maior = $fonte_conteudo_maior;
    }

    /**
     * @return bool
     */
    public function isTextoContraste()
    {
        return $this->texto_contraste;
    }

    /**
     * @param bool $texto_contraste
     */
    public function setTextoContraste($texto_contraste)
    {
        $this->texto_contraste = $texto_contraste;
    }

    /**
     * @return bool
     */
    public function isDaltonimsmo()
    {
        return $this->daltonimsmo;
    }

    /**
     * @param bool $daltonimsmo
     */
    public function setDaltonimsmo($daltonimsmo)
    {
        $this->daltonimsmo = $daltonimsmo;
    }

    /**
     * @return bool
     */
    public function isPreCarregamentoDentro()
    {
        return $this->pre_carregamento_dentro;
    }

    /**
     * @param bool $pre_carregamento_dentro
     */
    public function setPreCarregamentoDentro($pre_carregamento_dentro)
    {
        $this->pre_carregamento_dentro = $pre_carregamento_dentro;
    }

    /**
     * @return bool
     */
    public function isLimparFundoPagina()
    {
        return $this->limpar_fundo_pagina;
    }

    /**
     * @param bool $limpar_fundo_pagina
     */
    public function setLimparFundoPagina($limpar_fundo_pagina)
    {
        $this->limpar_fundo_pagina = $limpar_fundo_pagina;
    }

    /**
     * @return bool
     */
    public function isOcultarIconeNavegacao()
    {
        return $this->ocultar_icone_navegacao;
    }

    /**
     * @param bool $ocultar_icone_navegacao
     */
    public function setOcultarIconeNavegacao($ocultar_icone_navegacao)
    {
        $this->ocultar_icone_navegacao = $ocultar_icone_navegacao;
    }

    /**
     * @return bool
     */
    public function isDesabilitarAnimacao()
    {
        return $this->desabilitar_animacao;
    }

    /**
     * @param bool $desabilitar_animacao
     */
    public function setDesabilitarAnimacao($desabilitar_animacao)
    {
        $this->desabilitar_animacao = $desabilitar_animacao;
    }

    /**
     * @return bool
     */
    public function isOcultarCartaoInformacao()
    {
        return $this->ocultar_cartao_informacao;
    }

    /**
     * @param bool $ocultar_cartao_informacao
     */
    public function setOcultarCartaoInformacao($ocultar_cartao_informacao)
    {
        $this->ocultar_cartao_informacao = $ocultar_cartao_informacao;
    }

    /**
     * @return bool
     */
    public function isSubtituloLean()
    {
        return $this->subtitulo_lean;
    }

    /**
     * @param bool $subtitulo_lean
     */
    public function setSubtituloLean($subtitulo_lean)
    {
        $this->subtitulo_lean = $subtitulo_lean;
    }

    /**
     * @return bool
     */
    public function isNavegacaoHierarquica()
    {
        return $this->navegacao_hierarquica;
    }

    /**
     * @param bool $navegacao_hierarquica
     */
    public function setNavegacaoHierarquica($navegacao_hierarquica)
    {
        $this->navegacao_hierarquica = $navegacao_hierarquica;
    }

    /**
     * @return string
     */
    public function getTamanhoFonte()
    {
        return $this->tamanho_fonte;
    }

    /**
     * @param string $tamanho_fonte
     */
    public function setTamanhoFonte($tamanho_fonte)
    {
        $this->tamanho_fonte = $tamanho_fonte;
    }
}

