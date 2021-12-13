export const ELEMENTS = {
  novoArtigo: '[href*=editor]', // * pegar o href que contem o texto editor new article
  titulo: '[ng-model$=title]', // $ elemento termina com um valor especifico que é o title
  descricao: '[ng-model$=description]',
  conteudo: '[ng-model$=body]',
  tag: '[ng-model$=tagField]'
}
