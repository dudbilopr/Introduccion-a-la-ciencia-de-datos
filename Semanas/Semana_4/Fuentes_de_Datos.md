# Catálogo de Fuentes de Datos Abiertos y Datasets

Este documento compila repositorios y conjuntos de datos reales (Kaggle y Datos Abiertos de Colombia) recomendados para las prácticas de Análisis Exploratorio de Datos (EDA) y Visualización.

## 1. Portal Nacional de Datos Abiertos de Colombia
La fuente oficial del gobierno colombiano, ideal para ejercicios contextualizados a nivel regional.

- **[Portal Principal (datos.gov.co)](https://www.datos.gov.co/):** Puedes filtrar por formato `CSV`.
- **Ejemplos Recomendados:**
  - *Secop II (Contratación Pública)*: Excelente para agrupar por departamento y visualizar gastos.
  - *Casos Positivos COVID-19 en Colombia*: Ideal para series de tiempo y visualización geográfica.
  - *Resultados Pruebas Saber 11*: Perfecto para correlacionar factores sociodemográficos y rendimiento académico.

## 2. Kaggle - Educación (Learning Analytics)
Datasets ideales para practicar analítica descriptiva en entornos educativos.

- **[Student Performance in Exams](https://www.kaggle.com/datasets/spscientist/students-performance-in-exams):** Analiza cómo variables como el nivel educativo de los padres, almuerzo y preparación afectan los puntajes. Excelente para `Seaborn` (boxplots y scatterplots).
- **[Higher Education Students Performance Evaluation](https://www.kaggle.com/datasets/ahmedoktarmostafa/higher-education-students-performance-evaluation):** Datos demográficos y de rendimiento para clasificación y visualización multivariable.
- **[Global Education Statistics](https://www.kaggle.com/datasets/thedevastator/global-education-statistics):** Tasas de finalización y alfabetización mundial. Bueno para `Plotly` (choropleth maps).

## 3. Kaggle - Salud (Healthcare Data)
Conjuntos de datos altamente estructurados y comunes en la industria de la ciencia de datos.

- **[Diabetes Health Indicators Dataset](https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset):** Resultados limpios del BRFSS. Muy útil para practicar balanceo de clases y gráficos de barras agrupados.
- **[Heart Failure Clinical Records](https://www.kaggle.com/datasets/andrewmvd/heart-failure-clinical-data):** Pequeño pero complejo. Ideal para matrices de correlación (Heatmaps de Seaborn).
- **[Sleep Health and Lifestyle Dataset](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset):** Múltiples variables como duración del sueño, calidad, estrés, pasos diarios. Genial para diagramas de dispersión interactivos en Plotly.

## 4. Repositorios de Machine Learning Clásicos
Para pruebas rápidas y *benchmarking*.

- **[UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php):** Fuentes curadas académicamente. (Ej. el clásico dataset de Iris, Titanic, o Boston Housing).

---
*Usa la librería `pandas` (`pd.read_csv("url")`) para cargar cualquiera de estos datasets directamente en tus Colabs.*
