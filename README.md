# KwaiUTM

KwaiUTM é um script JavaScript para manipulação de parâmetros UTM em URLs, permitindo a configuração dinâmica de tokens, pixel IDs e parâmetros de clique.

## Descrição

Este script é utilizado para atualizar dinamicamente o parâmetro `utm_source` de uma URL com base em configurações fornecidas via atributos de script ou através de uma função de configuração.

## Instalação

Para usar o KwaiUTM, basta incluir o script em sua página HTML:

```html
<script 
    src="https://cdn.jsdelivr.net/gh/devluxca/kwaiutm@v0.1/utm-handler.js"
    data-token="seu-token"
    data-pixel-id="seu-pixel-id"
    data-click-id-param="click_id"
    data-is-test="false">
</script>
```

## Uso

Você pode configurar o script dinamicamente usando a função `configureUtmHandler`:

```javascript
window.configureUtmHandler({
    token: 'seu-token',
    pixelId: 'seu-pixel-id',
    clickIdParam: 'click_id',
    isTest: true
});
```