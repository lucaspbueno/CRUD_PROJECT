# Crud Project 
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) 

## Introdução
Este projeto foi desenvolvido como parte de um desafio técnico para a Arkmeds. O objetivo é criar uma aplicação web que permita aos usuários cadastrar, editar, deletar e visualizar equipamentos de uma empresa. A aplicação utiliza Django e Django REST Framework no backend, com React, Vite, Tailwind, DaisyUI e Shadcn no frontend, além de Docker para gerenciamento do ambiente.

## Rotas
### GET
#### Rota:
> http://localhost:8000/api/v1/equipment/
#### Retorno:
```
[
	{
		"id": "5a798859-cc39-45f9-b5a2-47bfccd04fa7",
		"tp_equipment": "Ferramenta",
		"nm_manufacturer": "Fabricante 1",
		"nm_model": "Modelo 2",
		"nr_serial": "325AFS23a4a5a",
		"dt_purchase": "2024-04-22T00:00:00Z",
		"vl_purchase": 35.0,
		"created_at": "2024-09-06T02:10:26.403508Z",
		"updated_at": "2024-09-06T02:10:26.403522Z"
	}
]
```
### POST 
#### Rota:
> http://localhost:8000/api/v1/equipment/
#### Body:
```
{
	"tp_equipment": "Ferramenta 5",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo 3",
	"nr_serial": "325AFS23623a4a5a5235",
	"dt_purchase": "2024-04-22T00:00:00Z",
	"vl_purchase": 35.0,
}
```
#### Retorno:
```
{
	"id": "0bc2cdc2-4fd7-418c-8df8-515a5aecc3ed",
	"tp_equipment": "Ferramenta 5",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo 3",
	"nr_serial": "325AFS23623a4a5a5235",
	"dt_purchase": "2024-04-22T00:00:00Z",
	"vl_purchase": 35.0,
	"created_at": "2024-09-06T02:16:33.583686Z",
	"updated_at": "2024-09-06T02:16:33.583709Z"
}
```


### PUT 
#### Rota:
> http://localhost:8000/api/v1/equipment/pk>/
### Parâmetro: ID do equipamento que será atualizado
#### Body: Campos a serem atualizados - (No caso de PUT devem ser todos)
```
{
	"tp_equipment": "Ferramenta 5",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo 3",
	"nr_serial": "325AFS23623a4a5a5235",
	"dt_purchase": "2024-04-22T00:00:00Z",
	"vl_purchase": 35.0,
}
```
#### Retorno:
```
{
	"id": "0bc2cdc2-4fd7-418c-8df8-515a5aecc3ed",
	"tp_equipment": "Ferramenta 5",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo 3",
	"nr_serial": "325AFS23623a4a5a5235",
	"dt_purchase": "2024-04-22T00:00:00Z",
	"vl_purchase": 35.0,
	"created_at": "2024-09-06T02:16:33.583686Z",
	"updated_at": "2024-09-06T02:16:33.583709Z"
}
```
### PATCH
#### Rota:
> http://localhost:8000/api/v1/equipment/pk/
### Parâmetro: ID do equipamento que será atualizado
#### Body: Campos a serem atualizados
```
{
	"tp_equipment": "Tipo 15",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo T22"
}
```
#### Retorno:
```
{
	"id": "5a798859-cc39-45f9-b5a2-47bfccd04fa7",
	"tp_equipment": "Tipo 15",
	"nm_manufacturer": "Fabricante 3",
	"nm_model": "Modelo T22",
	"nr_serial": "325234124a5a",
	"dt_purchase": "2024-04-22T00:00:00Z",
	"vl_purchase": 35.0,
	"created_at": "2024-09-06T02:10:26.403508Z",
	"updated_at": "2024-09-06T02:23:38.307317Z"
}
```
### DELETE
#### Rota:
> http://localhost:8000/api/v1/equipment/pk/
### Parâmetro: ID do equipamento que será excluído
#### Retorno: SEM RETORNO
