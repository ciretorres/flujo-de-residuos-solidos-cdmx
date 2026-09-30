# Colabora

## Crear una nueva página

Crea un archivo Markdown dentro de docs/:

```text
docs/mi-pagina.md
```

Añade contenido:

```md
# Mi página

Esta es una nueva página de documentación.
```

La página estará disponible en:

```text
http://localhost:5173/flujo-de-residuos-solidos-cdmx/mi-pagina
```

## Crear una nueva rama

Antes de realizar cambios, crea una rama de trabajo:

```bash
git checkout -b nombre-de-la-rama
```

## Guardar y subir cambios

Comprueba los archivos modificados:

```bash
git status
```

Añade los cambios:

```bash
git add .
```

Crea un commit:

```bash
git commit -m "Descripción de los cambios"
```

Sube la rama al repositorio remoto:

```bash
git push origin nombre-de-la-rama
```

## Contacto

- Eric Torres (erictorres.velasco@gmail.com)
