ARG ENVIRONMENT="prod"
FROM python:3.10.5

RUN apt update \
    && apt upgrade -y \
    && apt install -y curl \
        locales \
    && rm -rf /var/lib/apt/lists/*
    
RUN pip3 install --no-cache-dir --upgrade pip \
    poetry
# RUN useradd --no-create-home --gid root runner

ENV POETRY_VIRTUALENVS_CREATE=false

WORKDIR /code

COPY pyproject.toml .
COPY poetry.lock .

RUN [ "$ENVIRONMENT" = "prod" ] && poetry install --no-dev || poetry install

COPY . .

# RUN chown -R runner:root /code \    
#     && chmod -R g=u /code

# USER runner

ENV PORT=${PORT:-8000}
EXPOSE $PORT

ENV CMD=${CMD:-start} 


RUN chmod +x /code/*
# ENTRYPOINT [ "/code/docker-entrypoint.sh",$CMD, $PORT]
# ENTRYPOINT exec bash /code/docker-entrypoint.sh $CMD $PORT
ENTRYPOINT /code/docker-entrypoint.sh $CMD $PORT