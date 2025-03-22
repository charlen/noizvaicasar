#!/bin/bash

# Diretório onde as imagens estão localizadas
DIRECTORIO="./imagens"


rm ${DIRECTORIO}/*_lg.jpg &

# Limite de resolução em pixels (1920px nesse caso)
LARGURA_MAXIMA=1920

# Loop pelo diretório e processa cada imagem
for arquivo in "$DIRECTORIO"/*; do
  # Verifique se é uma imagem (jpg, png, etc.)
  if [[ "$arquivo" == *.jpg || "$arquivo" == *.png ]]; then
    # Extrai o nome do arquivo sem a extensão
    NOME_ARQUIVO="${arquivo%.*}"

    # Cria a imagem com prefixo "lg_" e tamanho máximo de $LARGURA_MAXIMA pixels
    ffmpeg -i "$arquivo" -vf "scale=${LARGURA_MAXIMA}:-1" -q:v 2\
           "${NOME_ARQUIVO}_lg.${arquivo##*.}"

  fi
done

mv -f ${DIRECTORIO}/*_lg.jpg ../weddingsite/public/images/ &

rm ${DIRECTORIO}/*_md*.jpg &

# Limite de resolução em pixels (1920px nesse caso)
LARGURA_MAXIMA=1080

# Loop pelo diretório e processa cada imagem
for arquivo in "$DIRECTORIO"/*; do
  # Verifique se é uma imagem (jpg, png, etc.)
  if [[ "$arquivo" == *.jpg || "$arquivo" == *.png ]]; then
    # Extrai o nome do arquivo sem a extensão
    NOME_ARQUIVO="${arquivo%.*}"

    # Cria a imagem com prefixo "lg_" e tamanho máximo de $LARGURA_MAXIMA pixels
    ffmpeg -i "$arquivo" -vf "scale=${LARGURA_MAXIMA}:-1" -q:v 2\
           "${NOME_ARQUIVO}_md.${arquivo##*.}"

  fi
done

mv -f ${DIRECTORIO}/*_md.jpg ../weddingsite/public/images/

