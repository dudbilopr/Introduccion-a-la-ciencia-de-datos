# Fuentes de los datos del curso

Todos los archivos de esta carpeta vienen del [UCI Machine Learning Repository](https://archive.ics.uci.edu/) con licencia **Creative Commons Attribution 4.0 International (CC BY 4.0)**, que permite redistribuirlos citando la fuente. Metadatos verificados con la API de UCI y la página de cada conjunto.

| Archivo | Conjunto original | Autoría | DOI | Semanas | Cambios del curso |
|---|---|---|---|---|---|
| `bicicletas_dia.csv` | Bike Sharing, `day.csv` (731 días) | Hadi Fanaee-T (2013), con datos de Capital Bikeshare, Washington D.C. | [10.24432/C5W894](https://doi.org/10.24432/C5W894) | 7, 9, 10, 14 | Ninguno |
| `bicicletas_hora.csv` | Bike Sharing, `hour.csv` (17.379 horas) | Ídem | Ídem | 8, 14 | Ninguno |
| `churn_telecom.csv` | Iranian Churn (3.150 clientes) | UCI no lista autores (2020) | [10.24432/C5JW3Z](https://doi.org/10.24432/C5JW3Z) | 11, 12 | Ninguno. Contiene 300 filas repetidas del original: se tratan en la semana 12. |
| `clientes_mayoristas.csv` | Wholesale customers (440 clientes) | Margarida Cardoso (2013) | [10.24432/C5030X](https://doi.org/10.24432/C5030X) | 13 | Ninguno |
| `frases_sentimiento.csv` | Sentiment Labelled Sentences (3.000 frases) | Dimitrios Kotzias (2015) | [10.24432/C57604](https://doi.org/10.24432/C57604) | 14 | Se unieron los tres archivos (Amazon, IMDb, Yelp) y se agregó la columna `fuente`. Ninguna frase se cambió. |
| `censo_adult.csv` | Adult, `adult.data` (32.561 personas, censo de EE. UU. de 1994) | Barry Becker y Ronny Kohavi (1996) | [10.24432/C5XW20](https://doi.org/10.24432/C5XW20) | 15 | Se agregaron los nombres de columna de la documentación; el original no los trae. |

## Artículos asociados

- Fanaee-T, H. y Gama, J. (2013). Event labeling combining ensemble detectors and background knowledge. *Progress in Artificial Intelligence*. https://doi.org/10.1007/s13748-013-0040-3 (cita que pide el Readme de Bike Sharing).
- Kotzias, D., Denil, M., de Freitas, N. y Smyth, P. (2015). From Group to Individual Labels Using Deep Features. *KDD 2015*, 597-606. https://doi.org/10.1145/2783258.2783380

## Advertencias que se enseñan

- Bike Sharing: el Readme llama "primavera" a la estación 1, pero por las fechas es invierno. Las variables de clima vienen normalizadas.
- Iranian Churn: las variables son de los meses 1 a 9 y la etiqueta del mes 12.
- Wholesale customers: el gasto está en "unidades monetarias" sin especificar.
- Sentiment: se excluyeron a propósito las frases neutras.
- Adult: datos de 1994; los vacíos vienen como `?`.
