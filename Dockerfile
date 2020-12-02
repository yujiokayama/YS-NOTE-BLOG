# FROM命令で、元となるimageを指定(node)
FROM node:12.5.0-alpine

# ENV命令で、環境変数を指定
ENV LANG=C.UTF-8 TZ=Asia/Tokyo

# WORKDIR命令で、/app内へ移動
WORKDIR /app

# COPY命令で、ホストマシンのpackage.jsonとpackage-lock.jsonをコンテナ内にコピー
COPY ./package*.json ./

# RUN命令で、コンテナ内で、npm installを実行し、moduleインストール
RUN npm install  && \
    npm install firebase-tools -g

# COPY命令で、ホストマシンのファイルをすべてコンテナにコピー
COPY ./ .

# ENV HOSTでhostを指定
ENV HOST 0.0.0.0










