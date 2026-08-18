/**
 * Banco Central de Preguntas - DataSci Academy
 * Arquitectura diseñada para escalar a +1000 preguntas.
 */

window.QuizBank = {
    "ciencia_datos": [
        // --- SEMANA 1 & 2: Fundamentos y Ecosistema ---
        {
            id: 1,
            tema: "Fundamentos",
            pregunta: "¿Qué es la 'Ciencia de Datos' en términos estrictos empresariales?",
            opciones: [
                "Programar exclusivamente en Python y R.",
                "La extracción de conocimiento procesable (Insights) a partir de datos ruidosos o crudos.",
                "Instalar bases de datos relacionales en servidores locales.",
                "Crear páginas web para mostrar gráficos bonitos."
            ],
            respuestaCorrecta: 1,
            explicacion: "La Ciencia de Datos combina matemáticas, estadística y programación para extraer valor y conocimiento útil (Insights) que ayuda a la toma de decisiones."
        },
        {
            id: 2,
            tema: "Ecosistema Python",
            pregunta: "¿Cuál es la principal ventaja de utilizar Google Colab frente a una instalación local de Jupyter Notebook en las primeras etapas de aprendizaje?",
            opciones: [
                "No requiere configurar entornos virtuales ni instalar paquetes localmente.",
                "Ejecuta el código directamente en el procesador físico de la computadora del usuario.",
                "Funciona sin necesidad de conexión a internet.",
                "Colab genera automáticamente las líneas de código sin que el usuario escriba."
            ],
            respuestaCorrecta: 0,
            explicacion: "Google Colab es un entorno basado en la nube (SaaS) que viene con las librerías principales preinstaladas, eliminando la fricción de la configuración inicial."
        },
        {
            id: 3,
            tema: "Ecosistema Python",
            pregunta: "¿Qué estructura de datos de Python es inmutable (no puede modificarse una vez creada)?",
            opciones: ["List (Lista)", "Dictionary (Diccionario)", "Set (Conjunto)", "Tuple (Tupla)"],
            respuestaCorrecta: 3,
            explicacion: "Las tuplas se definen con paréntesis () y son inmutables. Esto las hace más rápidas y seguras para datos que no deben cambiar."
        },
        {
            id: 4,
            tema: "Fundamentos",
            pregunta: "¿Cuál es la diferencia principal entre datos estructurados y no estructurados?",
            opciones: [
                "Los datos estructurados solo contienen texto, los no estructurados contienen números.",
                "Los datos estructurados tienen un formato tabular definido (como SQL o Excel), mientras que los no estructurados no (como texto libre, imágenes o audio).",
                "Los datos estructurados ocupan más memoria que los no estructurados.",
                "No existe ninguna diferencia práctica en la Ciencia de Datos moderna."
            ],
            respuestaCorrecta: 1,
            explicacion: "Los datos estructurados encajan perfectamente en filas y columnas predefinidas, lo que facilita su análisis tradicional."
        },
        {
            id: 5,
            tema: "Ecosistema Python",
            pregunta: "En Python, ¿para qué se utiliza la librería Pandas principalmente?",
            opciones: [
                "Para entrenar modelos de Deep Learning.",
                "Para crear servidores web backend.",
                "Para la manipulación, limpieza y análisis avanzado de datos tabulares.",
                "Para renderizar gráficos en 3D interactivos."
            ],
            respuestaCorrecta: 2,
            explicacion: "Pandas es la 'navaja suiza' para datos estructurados en Python, ofreciendo estructuras como Series y DataFrames."
        },
        
        // --- SEMANA 3: Estructuras, Control de Flujo y Pandas Avanzado ---
        {
            id: 6,
            tema: "Control de Flujo",
            pregunta: "Al iterar sobre un diccionario en Python usando un simple `for item in mi_diccionario:`, ¿qué se imprime o devuelve en cada iteración?",
            opciones: [
                "Los valores (values) del diccionario.",
                "Las llaves (keys) del diccionario.",
                "Las tuplas (key, value) simultáneamente.",
                "Da un error de sintaxis."
            ],
            respuestaCorrecta: 1,
            explicacion: "Por defecto, un ciclo for sobre un diccionario itera únicamente sobre sus llaves. Para obtener ambos, se debe usar mi_diccionario.items()."
        },
        {
            id: 7,
            tema: "Pandas Avanzado",
            pregunta: "¿Qué método de un DataFrame de Pandas debes usar si estrictamente necesitas iterar sobre sus filas obteniendo el índice y la serie completa en cada paso?",
            opciones: ["df.itercols()", "df.items()", "df.iterrows()", "df.walk()"],
            respuestaCorrecta: 2,
            explicacion: "iterrows() genera un par (índice, serie) para cada fila del DataFrame. Sin embargo, no suele ser la forma más eficiente para datasets muy grandes."
        },
        {
            id: 8,
            tema: "Pandas Avanzado",
            pregunta: "¿Por qué los Científicos de Datos prefieren usar funciones vectorizadas como `.apply()` en lugar de ciclos `for` con `.iterrows()` al manipular DataFrames grandes?",
            opciones: [
                "Porque iterrows() borra los datos originales del DataFrame.",
                "Porque apply() está escrito en C por debajo y aplica operaciones a columnas enteras de forma mucho más rápida y eficiente que un ciclo fila por fila en Python.",
                "Porque apply() es la única forma de modificar strings en Python.",
                "Porque los ciclos for ya no están soportados en las versiones recientes de Python."
            ],
            respuestaCorrecta: 1,
            explicacion: "La vectorización delega las operaciones a niveles de lenguaje más bajos (C/Cython), ejecutando el cálculo en bloques, lo cual es exponencialmente más rápido que la iteración nativa de Python."
        },
        {
            id: 9,
            tema: "Numpy",
            pregunta: "Tienes un Numpy Array 2D (una matriz). Si usas `for fila in mi_matriz:`, ¿qué obtienes en cada iteración?",
            opciones: [
                "Cada número escalar individual de toda la matriz.",
                "Un Array 1D correspondiente a cada fila.",
                "Un Array 1D correspondiente a cada columna.",
                "La suma de los elementos de la matriz."
            ],
            respuestaCorrecta: 1,
            explicacion: "Al iterar un array 2D de Numpy, la iteración estándar extrae sub-arreglos 1D a lo largo del primer eje (las filas)."
        },
        {
            id: 10,
            tema: "Numpy",
            pregunta: "¿Qué función te permite visitar CADA escalar (número) individual en un Numpy Array de cualquier dimensión (2D, 3D, etc.) sin usar múltiples ciclos anidados?",
            opciones: ["np.flatten()", "np.nditer()", "np.all_elements()", "np.scalar_walk()"],
            respuestaCorrecta: 1,
            explicacion: "np.nditer() es un objeto iterador multidimensional eficiente diseñado específicamente para recorrer arrays sin importar su forma."
        },
        {
            id: 11,
            tema: "Pandas Avanzado",
            pregunta: "Si ejecutas `df.loc[x, 'Columna'] = 5` dentro de un ciclo `iterrows()` (donde x es el índice), ¿qué está sucediendo exactamente?",
            opciones: [
                "Estás filtrando el DataFrame para mostrar solo la fila x.",
                "Estás eliminando la columna 'Columna'.",
                "Estás asignando o creando un valor de 5 en la fila 'x' para la columna 'Columna'.",
                "El código fallará porque no se puede modificar un DataFrame en tiempo de ejecución."
            ],
            respuestaCorrecta: 2,
            explicacion: ".loc[] permite localizar una celda específica por su índice y nombre de columna. Si la columna no existe, la crea; si existe, sobrescribe el valor."
        },
        {
            id: 12,
            tema: "Limpieza de Datos",
            pregunta: "Al importar un archivo CSV sucio, notas espacios en blanco extra en una lista de nombres de empleados. ¿Qué método de string en Python es ideal usar dentro de un ciclo para limpiar estos espacios laterales?",
            opciones: [".upper()", ".replace(' ', '')", ".split()", ".strip()"],
            respuestaCorrecta: 3,
            explicacion: "El método .strip() elimina automáticamente todos los espacios en blanco, tabulaciones o saltos de línea al principio y al final de un string, dejando intactos los espacios intermedios válidos."
        },
        {
            id: 13,
            tema: "EMI Terminology",
            pregunta: "In Data Science terminology, what does 'Missing Values' refer to?",
            opciones: [
                "Data that is too large to fit in memory (RAM).",
                "Absence of data for certain variables/columns in a dataset, often represented as NaN or Null.",
                "Values that are mathematically incorrect or impossible.",
                "Variables that have been deleted by the user."
            ],
            respuestaCorrecta: 1,
            explicacion: "Missing values (NaN, Null, NA) indicate that no data value is stored for the variable in an observation. Handling them is a critical part of data cleaning."
        },
        {
            id: 14,
            tema: "EMI Terminology",
            pregunta: "What is the English term used to describe a graphical representation of data, such as bar charts or scatter plots?",
            opciones: ["Data Structuring", "Data Scraping", "Data Visualization", "Data Mining"],
            respuestaCorrecta: 2,
            explicacion: "Data Visualization refers to the graphical representation of information and data to communicate insights clearly."
        },
        {
            id: 15,
            tema: "Buenas Prácticas",
            pregunta: "¿Por qué es fundamental el concepto de 'Pair Programming' (Programación en Parejas) en el desarrollo analítico?",
            opciones: [
                "Porque permite dividir el salario entre dos analistas.",
                "Porque la ley exige que el código sea auditado en tiempo real.",
                "Porque reduce errores de sintaxis, fomenta el debate de lógica algorítmica y transfiere conocimiento entre el Piloto y el Copiloto.",
                "Porque un solo computador no tiene suficiente RAM para correr Pandas."
            ],
            respuestaCorrecta: 2,
            explicacion: "El Pair Programming es una práctica de XP (Extreme Programming) que aumenta la calidad del código y la resiliencia del equipo a través del trabajo colaborativo."
        },
{
            id: 16,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Cuál es el objetivo principal del Análisis Exploratorio de Datos (EDA) antes de aplicar cualquier modelo predictivo?",
            opciones: [
                "Entrenar el modelo lo más rápido posible.",
                "Descubrir patrones subyacentes, detectar valores atípicos (outliers) y probar hipótesis básicas sobre los datos.",
                "Desplegar la aplicación en la nube.",
                "Cifrar los datos para cumplir con normativas de privacidad."
            ],
            respuestaCorrecta: 1,
            explicacion: "El EDA es una fase detectivesca crucial para entender la forma de los datos, encontrar errores y guiar la selección de variables antes del modelado."
        },
        {
            id: 17,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué estadístico de resumen NO es parte de los 5 números de un diagrama de caja (Boxplot)?",
            opciones: ["Mínimo", "Mediana", "Media", "Tercer Cuartil (Q3)"],
            respuestaCorrecta: 2,
            explicacion: "El resumen de los 5 números incluye: Mínimo, Q1 (Primer Cuartil), Mediana (Q2), Q3 (Tercer Cuartil) y Máximo. La media no determina los bigotes de la caja."
        },
        {
            id: 18,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "Si una distribución de datos tiene una 'asimetría positiva' (right-skewed), ¿dónde suele ubicarse la media con respecto a la mediana?",
            opciones: [
                "La media es menor que la mediana.",
                "La media es igual a la mediana.",
                "La media es mayor que la mediana.",
                "Depende del número de observaciones."
            ],
            respuestaCorrecta: 2,
            explicacion: "En una asimetría positiva, la cola larga está a la derecha, arrastrando la media hacia valores más altos, por lo que Media > Mediana."
        },
        {
            id: 19,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "En Pandas, ¿qué método proporciona instantáneamente estadísticas descriptivas (media, desviación estándar, min, max, cuartiles) de las columnas numéricas?",
            opciones: ["df.info()", "df.describe()", "df.summary()", "df.stats()"],
            respuestaCorrecta: 1,
            explicacion: "df.describe() genera automáticamente un resumen estadístico para cada columna numérica del DataFrame."
        },
        {
            id: 20,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Cómo se define típicamente un valor atípico (outlier) matemático usando el Rango Intercuartílico (IQR)?",
            opciones: [
                "Cualquier valor por encima de Q3 + 1.5 * IQR o por debajo de Q1 - 1.5 * IQR.",
                "Cualquier valor mayor a la media.",
                "Los 10 valores más altos y más bajos del dataset.",
                "Valores mayores a la Mediana + 2 * Varianza."
            ],
            respuestaCorrecta: 0,
            explicacion: "La regla de Tukey para outliers establece los límites en 1.5 veces el Rango Intercuartílico (Q3 - Q1) desde los cuartiles superior e inferior."
        },
        {
            id: 21,
            tema: "Visualización: Matplotlib",
            pregunta: "¿Cuál es el comando estándar para importar el módulo principal de gráficos de Matplotlib en Python?",
            opciones: [
                "import matplotlib as mp",
                "import matplotlib.pyplot as plt",
                "import plt.matplotlib as plot",
                "import seaborn as plt"
            ],
            respuestaCorrecta: 1,
            explicacion: "El estándar universal en la industria de datos es importar el submódulo pyplot de matplotlib bajo el alias 'plt'."
        },
        {
            id: 22,
            tema: "Visualización: Matplotlib",
            pregunta: "En Matplotlib, ¿cuál es la diferencia conceptual entre una 'Figure' y unos 'Axes'?",
            opciones: [
                "Son exactamente lo mismo.",
                "Figure es la línea trazada, Axes son los ejes X y Y.",
                "Figure es el lienzo completo (ventana), Axes es el gráfico o subtrama individual que vive dentro del lienzo.",
                "Figure define los colores, Axes define los datos."
            ],
            respuestaCorrecta: 2,
            explicacion: "Puedes tener múltiples gráficos (Axes) dentro de un solo lienzo (Figure)."
        },
        {
            id: 23,
            tema: "Visualización: Matplotlib",
            pregunta: "Para crear un gráfico de dispersión (Scatter Plot) con Matplotlib, ¿qué función utilizas?",
            opciones: ["plt.plot()", "plt.scatter()", "plt.points()", "plt.dots()"],
            respuestaCorrecta: 1,
            explicacion: "plt.scatter(x, y) grafica puntos individuales sin conectarlos por líneas, ideal para ver la relación entre dos variables."
        },
        {
            id: 24,
            tema: "Visualización: Matplotlib",
            pregunta: "Estás creando múltiples sub-gráficos en una sola imagen. ¿Qué función de Matplotlib facilita la creación de la Figure y los Axes en una matriz?",
            opciones: ["plt.subplots()", "plt.grid()", "plt.multigraph()", "plt.panels()"],
            respuestaCorrecta: 0,
            explicacion: "fig, ax = plt.subplots(nrows, ncols) es la forma recomendada para crear rápidamente un diseño de múltiples gráficos."
        },
        {
            id: 25,
            tema: "Visualización: Matplotlib",
            pregunta: "¿Cómo guardas un gráfico generado en Matplotlib como una imagen PNG de alta resolución (300 dpi) en tu disco duro?",
            opciones: [
                "plt.export('grafico.png', res=300)",
                "plt.savefig('grafico.png', dpi=300)",
                "plt.download('grafico.png')",
                "plt.write_image('grafico.png')"
            ],
            respuestaCorrecta: 1,
            explicacion: "savefig() captura la 'Figure' actual y permite definir parámetros como la ruta y la densidad de píxeles (dpi)."
        },
        {
            id: 26,
            tema: "Visualización: Seaborn",
            pregunta: "¿Qué ventaja principal ofrece Seaborn frente a usar únicamente Matplotlib puro?",
            opciones: [
                "Seaborn es 100 veces más rápido computacionalmente.",
                "Seaborn permite hacer gráficos 3D complejos, Matplotlib no.",
                "Seaborn tiene una sintaxis de alto nivel más declarativa, temas más modernos por defecto y se integra perfectamente con Pandas DataFrames.",
                "Seaborn permite exportar a bases de datos directamente."
            ],
            respuestaCorrecta: 2,
            explicacion: "Seaborn está construido sobre Matplotlib para facilitar la creación de gráficos estadísticos atractivos con muy pocas líneas de código, asumiendo datos en formato DataFrame."
        },
        {
            id: 27,
            tema: "Visualización: Seaborn",
            pregunta: "¿Qué tipo de gráfico de Seaborn usarías para visualizar la distribución de una variable numérica estratificada (dividida) por una variable categórica, combinando la estimación de densidad y un boxplot?",
            opciones: ["sns.barplot()", "sns.violinplot()", "sns.scatterplot()", "sns.heatmap()"],
            respuestaCorrecta: 1,
            explicacion: "El violinplot combina un boxplot con un Kernel Density Estimate (KDE), permitiendo ver no solo los cuartiles sino la forma completa de la distribución."
        },
        {
            id: 28,
            tema: "Visualización: Seaborn",
            pregunta: "¿Qué significa el parámetro `hue` en casi todas las funciones de gráficos de Seaborn (ej. sns.scatterplot(x='A', y='B', hue='C'))?",
            opciones: [
                "Ajusta el brillo y saturación de toda la imagen.",
                "Colorea los puntos o elementos del gráfico basándose en las categorías de la variable 'C'.",
                "Agrega una leyenda en la esquina superior derecha.",
                "Cambia el tamaño de los puntos."
            ],
            respuestaCorrecta: 1,
            explicacion: "El parámetro hue ('matiz') agrupa y colorea los datos según otra variable, añadiendo instantáneamente una tercera dimensión de información al gráfico 2D."
        },
        {
            id: 29,
            tema: "Visualización: Seaborn",
            pregunta: "Quieres visualizar la matriz de correlación de Pearson de un dataset numérico. ¿Qué gráfico de Seaborn es ideal para mostrar estos valores en una cuadrícula de colores?",
            opciones: ["sns.pairplot()", "sns.heatmap()", "sns.jointplot()", "sns.clustermap()"],
            respuestaCorrecta: 1,
            explicacion: "sns.heatmap(df.corr()) genera un mapa de calor donde los colores más intensos representan correlaciones más fuertes (positivas o negativas)."
        },
        {
            id: 30,
            tema: "Visualización: Seaborn",
            pregunta: "Si tienes 10 variables numéricas y quieres visualizar rápidamente todas las relaciones bivariadas posibles de un solo golpe, ¿qué función usas?",
            opciones: ["sns.heatmap()", "sns.relplot()", "sns.pairplot()", "sns.lmplot()"],
            respuestaCorrecta: 2,
            explicacion: "sns.pairplot(df) genera una cuadrícula n x n que muestra diagramas de dispersión para todas las combinaciones de variables numéricas, y distribuciones en la diagonal."
        },
        {
            id: 31,
            tema: "Visualización de Datos",
            pregunta: "Al graficar datos temporales (ej. ventas a lo largo de los meses de un año), ¿qué tipo de gráfico es casi un estándar obligatorio para mostrar la tendencia?",
            opciones: ["Gráfico de Torta (Pie Chart)", "Gráfico de Barras", "Gráfico de Líneas (Line Plot)", "Gráfico de Dispersión"],
            respuestaCorrecta: 2,
            explicacion: "Las líneas conectan datos secuenciales, lo que guía naturalmente al ojo humano para comprender la evolución o tendencia a través del tiempo."
        },
        {
            id: 32,
            tema: "Storytelling con Datos",
            pregunta: "¿Por qué los expertos en Visualización de Datos, como Edward Tufte, recomiendan EVITAR usar Gráficos de Torta (Pie Charts) si hay muchas categorías?",
            opciones: [
                "Porque los gráficos de torta no se pueden exportar a PDF.",
                "Porque los lenguajes de programación no saben dibujarlos bien.",
                "Porque el cerebro humano es muy malo estimando y comparando ángulos o áreas en un círculo, haciendo difícil ver diferencias sutiles.",
                "Porque gastan más tinta al imprimir."
            ],
            respuestaCorrecta: 2,
            explicacion: "Es mucho más fácil para nosotros comparar longitudes lineales (como en un gráfico de barras horizontales) que comparar tajadas de un círculo."
        },
        {
            id: 33,
            tema: "Storytelling con Datos",
            pregunta: "¿Qué es el 'Data-Ink Ratio' (Proporción de tinta de datos) en el diseño de gráficos?",
            opciones: [
                "La cantidad de memoria que ocupa la imagen.",
                "La proporción de 'tinta' utilizada para mostrar los datos reales frente a la tinta usada para decoraciones inútiles (bordes, fondos 3D). Debe maximizarse.",
                "El número de colores utilizados en el gráfico.",
                "El código necesario para generar el gráfico dividido por las líneas totales del script."
            ],
            respuestaCorrecta: 1,
            explicacion: "Maximizar el Data-Ink Ratio significa eliminar todo el ruido visual (gridlines innecesarios, fondos grises, efectos 3D) que no aporta valor al análisis."
        },
        {
            id: 34,
            tema: "Visualización Avanzada",
            pregunta: "¿Qué hace la función `sns.lmplot()` en Seaborn?",
            opciones: [
                "Crea un modelo de lenguaje (Language Model).",
                "Grafica un scatter plot e inmediatamente superpone una línea de regresión lineal con su intervalo de confianza.",
                "Carga un dataset en la memoria.",
                "Genera un mapa geográfico interactivo."
            ],
            respuestaCorrecta: 1,
            explicacion: "lmplot (Linear Model plot) es perfecto para visualizar la relación lineal general entre dos variables con una regresión calculada al vuelo."
        },
        {
            id: 35,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "En Pandas, ¿qué hace el método `df.corr()`?",
            opciones: [
                "Corrige errores ortográficos en las columnas de texto.",
                "Calcula la correlación por pares de todas las columnas numéricas en el DataFrame.",
                "Elimina filas nulas.",
                "Calcula la desviación estándar."
            ],
            respuestaCorrecta: 1,
            explicacion: "Por defecto, df.corr() calcula la correlación de Pearson (de -1 a 1) entre todas las variables numéricas, clave para detectar relaciones o multicolinealidad."
        },
        {
            id: 36,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué técnica de imputación usarías normalmente si a una columna numérica le faltan datos (Missing Values) pero la distribución tiene graves outliers?",
            opciones: [
                "Imputar con la Media (Mean).",
                "Imputar con la Mediana (Median).",
                "Eliminar toda la columna.",
                "Imputar con el valor Máximo."
            ],
            respuestaCorrecta: 1,
            explicacion: "La mediana es robusta a valores atípicos, a diferencia de la media, que sería severamente arrastrada por los outliers sesgando la imputación."
        },
        {
            id: 37,
            tema: "EMI Terminology",
            pregunta: "What does the acronym 'EDA' stand for in Data Science workflows?",
            opciones: [
                "Electronic Data Automation",
                "Exploratory Data Analysis",
                "Estimated Density Algorithm",
                "External Data Access"
            ],
            respuestaCorrecta: 1,
            explicacion: "Exploratory Data Analysis is the crucial initial process of investigating data to discover patterns and spot anomalies."
        },
        {
            id: 38,
            tema: "Visualización: Seaborn",
            pregunta: "Si usas `sns.boxplot(x='Ciudad', y='Salario', data=df)`, ¿qué se colocará en el eje Y?",
            opciones: [
                "Los nombres de las ciudades.",
                "La distribución continua de los salarios dentro de cada ciudad.",
                "El conteo total de personas en cada ciudad.",
                "La suma total de todos los salarios."
            ],
            respuestaCorrecta: 1,
            explicacion: "El eje Y numérico ('Salario') se segmentará en cajas independientes para cada categoría discreta presente en el eje X ('Ciudad')."
        },
        {
            id: 39,
            tema: "Storytelling con Datos",
            pregunta: "Al presentar hallazgos a la junta directiva (stakeholders), ¿qué principio de diseño visual debes aplicar para resaltar la métrica más importante?",
            opciones: [
                "Usar gráficos en 3D para impresionar.",
                "Pre-atentive Attributes: usar colores llamativos (como rojo o naranja) SOLO en el dato crítico, y dejar el resto en tonos neutros (gris).",
                "Poner todo el dataset en una tabla gigante en la diapositiva.",
                "Hacer que el gráfico rote en la pantalla."
            ],
            respuestaCorrecta: 1,
            explicacion: "Los atributos pre-atentivos (color, tamaño, grosor) procesados en milisegundos por el cerebro dirigen la atención del público exactamente adonde quieres que miren."
        },
        {
            id: 40,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "El método `df.value_counts()` en Pandas es extremadamente útil durante el EDA para:",
            opciones: [
                "Sumar todos los números de una columna.",
                "Calcular el promedio de una serie temporal.",
                "Obtener las frecuencias únicas (conteos) de variables categóricas o factores.",
                "Conectar con una base de datos SQL."
            ],
            respuestaCorrecta: 2,
            explicacion: "Te muestra rápidamente cuántas veces se repite cada categoría, por ejemplo cuántos 'Activos' o 'Inactivos' hay en la variable 'Estado'."
        },
        {
            id: 41,
            tema: "Visualización: Matplotlib",
            pregunta: "¿Qué hace la función `plt.legend()`?",
            opciones: [
                "Añade un título gigante al gráfico.",
                "Añade un cuadro que describe a qué etiqueta corresponde cada línea o color dibujado (si se especificó el parámetro `label`).",
                "Guarda el gráfico.",
                "Calcula la regresión lineal."
            ],
            respuestaCorrecta: 1,
            explicacion: "La leyenda ayuda a decodificar la información cuando hay múltiples series graficadas, atando los colores/estilos con los nombres ('labels')."
        },
        {
            id: 42,
            tema: "Visualización: Matplotlib",
            pregunta: "Quieres limitar el eje Y para que vaya estrictamente de 0 a 100. ¿Qué comando de Matplotlib usas?",
            opciones: ["plt.set_y(0, 100)", "plt.ylim(0, 100)", "plt.axis_y(100)", "plt.range_y(0,100)"],
            respuestaCorrecta: 1,
            explicacion: "plt.ylim(ymin, ymax) ajusta los límites numéricos de visualización del eje Y."
        },
        {
            id: 43,
            tema: "EMI Terminology",
            pregunta: "In statistics, what is the 'Variance' (Varianza)?",
            opciones: [
                "The middle value of a dataset.",
                "A measure of dispersion, representing how far each number in a set is from the mean and thus from every other number.",
                "The most frequent value.",
                "The difference between the maximum and minimum values."
            ],
            respuestaCorrecta: 1,
            explicacion: "Variance measures variability from the average or mean."
        },
        {
            id: 44,
            tema: "Visualización: Seaborn",
            pregunta: "El gráfico `sns.countplot(x='Departamento', data=df)` es un envoltorio de Seaborn equivalente a...",
            opciones: [
                "Un Gráfico de Dispersión.",
                "Un Gráfico de Barras que grafica automáticamente la salida de df['Departamento'].value_counts().",
                "Un Histograma de distribución continua.",
                "Un Gráfico de Cajas."
            ],
            respuestaCorrecta: 1,
            explicacion: "Countplot cuenta automáticamente las ocurrencias por categoría y las dibuja en barras, ideal para variables categóricas nominales."
        },
        {
            id: 45,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "Si tu variable objetivo es 'Ingresos (Numérico)' y quieres ver si existe diferencia en ingresos según 'Género (Categórico)', la técnica ideal bivariada es:",
            opciones: [
                "Correlación de Pearson.",
                "Scatter plot de Género vs Género.",
                "Boxplot de Ingresos particionado por Género.",
                "Gráfico de torta."
            ],
            respuestaCorrecta: 2,
            explicacion: "El Boxplot (Numérico vs Categórico) te permite comparar las medianas, los cuartiles y detectar de inmediato si las distribuciones están solapadas o separadas."
        },
        {
            id: 46,
            tema: "Visualización: Seaborn",
            pregunta: "¿Qué significa el parámetro `kde=True` en `sns.histplot()`?",
            opciones: [
                "Kernel Data Encryption, cifra los datos.",
                "Kernel Density Estimation, superpone una curva suavizada de probabilidad sobre las barras del histograma.",
                "Keep Data Even, balancea los datos antes de graficar.",
                "Muestra el gráfico en formato 3D."
            ],
            respuestaCorrecta: 1,
            explicacion: "KDE proporciona una línea de tendencia suave de la distribución asumiendo probabilidad, lo cual ayuda a visualizar la forma de manera más estética que los bloques rígidos del histograma."
        },
        {
            id: 47,
            tema: "Storytelling con Datos",
            pregunta: "Según las leyes de Gestalt aplicadas al diseño de dashboards, ¿qué indica la Ley de Proximidad?",
            opciones: [
                "Que los colores cercanos en la rueda cromática combinan bien.",
                "Que los elementos visuales que se colocan cerca unos de otros son percibidos por el cerebro como parte del mismo grupo o métrica.",
                "Que el dashboard debe cargar en menos de un segundo.",
                "Que las fuentes deben ser grandes si el usuario está lejos."
            ],
            respuestaCorrecta: 1,
            explicacion: "Agrupar gráficos de la misma temática sin líneas divisorias fuertes ayuda a la fluidez visual."
        },
        {
            id: 48,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué función de Pandas sirve para agrupar datos por una categoría y luego aplicarles funciones de agregación (como media o suma)?",
            opciones: ["df.combine()", "df.aggregate()", "df.groupby()", "df.merge()"],
            respuestaCorrecta: 2,
            explicacion: "El patrón clásico es df.groupby('Categoria')['ColumnaNumérica'].mean(), que utiliza el principio Split-Apply-Combine."
        },
        {
            id: 49,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "Estás investigando el Titanic dataset. Quieres saber la edad promedio, y el número de sobrevivientes, segmentado simultáneamente por Sexo y por Clase Social. La herramienta definitiva en Pandas para esto es:",
            opciones: ["df.describe()", "df.pivot_table()", "df.hist()", "df.sort_values()"],
            respuestaCorrecta: 1,
            explicacion: "Las Tablas Dinámicas (Pivot Tables) son extraordinarias para cruzar dos o más dimensiones (índice, columnas) y aplicar métricas cruzadas."
        },
        {
            id: 50,
            tema: "Visualización: Matplotlib",
            pregunta: "En una gráfica, notas que los datos numéricos de los ejes están superpuestos y no se pueden leer. ¿Qué método usarías para inclinar las etiquetas del eje X a 45 grados?",
            opciones: [
                "plt.rotate(45)",
                "plt.xticks(rotation=45)",
                "plt.xlabel_angle(45)",
                "plt.tilt(45)"
            ],
            respuestaCorrecta: 1,
            explicacion: "xticks controla las marcas y etiquetas numéricas/de texto del eje X, permitiendo ajustar parámetros como la rotación."
        },
        {
            id: 51,
            tema: "Storytelling con Datos",
            pregunta: "¿Cuál de estos colores deberías evitar usar simultáneamente como únicos indicadores en un mapa de calor debido a problemas de accesibilidad (daltonismo)?",
            opciones: [
                "Azul y Naranja",
                "Rojo y Verde",
                "Amarillo y Púrpura",
                "Gris oscuro y Gris claro"
            ],
            respuestaCorrecta: 1,
            explicacion: "La ceguera al rojo-verde (Deuteranopía/Protanopía) es la forma más común de daltonismo. Paletas seguras como Viridis (Azul/Amarillo) o Cividis son el estándar actual."
        },
        {
            id: 52,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "Al ver la correlación de Pearson, notas una correlación de -0.92 entre 'Precio' y 'Ventas'. Esto indica:",
            opciones: [
                "Que hay un error en los datos.",
                "Una fuerte correlación positiva; a mayor precio, más ventas.",
                "Una fuerte correlación negativa; a medida que aumenta el precio, las ventas disminuyen sustancialmente.",
                "Que no hay correlación."
            ],
            respuestaCorrecta: 2,
            explicacion: "Correlaciones negativas cercanas a -1 indican una fuerte relación lineal inversamente proporcional."
        },
        {
            id: 53,
            tema: "EMI Terminology",
            pregunta: "What does the term 'Outlier' mean in a dataset?",
            opciones: [
                "The most frequent value.",
                "A data point that differs significantly from other observations, potentially due to variability or experimental error.",
                "Data that is exported out of the system.",
                "The variable we are trying to predict (target)."
            ],
            respuestaCorrecta: 1,
            explicacion: "Outliers lie far away from the central cluster of data points."
        },
        {
            id: 54,
            tema: "Visualización: Matplotlib",
            pregunta: "Quieres añadir el título 'Ventas Trimestrales' a tu gráfico en Matplotlib. ¿El código correcto es?",
            opciones: ["plt.set_title('Ventas Trimestrales')", "plt.title('Ventas Trimestrales')", "plt.header('Ventas Trimestrales')", "plt.add_text('Ventas Trimestrales')"],
            respuestaCorrecta: 1,
            explicacion: "plt.title() es la función estándar orientada a estados de pyplot para definir el encabezado."
        },
        {
            id: 55,
            tema: "Visualización: Seaborn",
            pregunta: "Si usas un tema de Seaborn como `sns.set_theme(style='darkgrid')`, ¿a qué afecta esto?",
            opciones: [
                "Solo a los gráficos de torta.",
                "Al fondo de tu notebook.",
                "Establece parámetros predeterminados de Matplotlib a nivel global (fondos grises con rejilla blanca, fuentes, paletas) para todos los gráficos siguientes.",
                "Convierte los datos a un DataFrame."
            ],
            respuestaCorrecta: 2,
            explicacion: "Seaborn sobrescribe el diccionario de parámetros rcParams de Matplotlib, inyectando un estilo estético global en el notebook."
        },
        {
            id: 56,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué significa que dos variables tengan multicolinealidad alta?",
            opciones: [
                "Que son independientes.",
                "Que ambas están altamente correlacionadas entre sí, aportando información redundante al modelo predictivo.",
                "Que tienen varianzas bajas.",
                "Que provienen de diferentes bases de datos."
            ],
            respuestaCorrecta: 1,
            explicacion: "La multicolinealidad alta en variables predictoras puede desestabilizar modelos lineales al hacer redundante la información."
        },
        {
            id: 57,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué técnica de remuestreo (resampling) se usa para tratar el desbalance extremo de clases (ej. 99% de Transacciones Legales y 1% de Fraudes)?",
            opciones: [
                "One-Hot Encoding.",
                "SMOTE (Synthetic Minority Over-sampling Technique) o Undersampling.",
                "Normalización Z-Score.",
                "Correlación de Pearson."
            ],
            respuestaCorrecta: 1,
            explicacion: "SMOTE crea datos sintéticos de la clase minoritaria, equilibrando la balanza para que el algoritmo no asuma ciegamente la clase mayoritaria."
        },
        {
            id: 58,
            tema: "EMI Terminology",
            pregunta: "In data visualization, what are 'Axes'?",
            opciones: [
                "The plural of axis; they refer to the x and y dimensions determining the data coordinates.",
                "A tool to cut the data.",
                "The main title of the plot.",
                "The entire window holding multiple plots."
            ],
            respuestaCorrecta: 0,
            explicacion: "Axes (plural of axis) define the cartesian plane bounds (x and y axis lines, ticks, labels)."
        },
        {
            id: 59,
            tema: "Storytelling con Datos",
            pregunta: "¿Cuál es el propósito del texto en un gráfico efectivo (ej. título descriptivo en lugar de genérico)?",
            opciones: [
                "Dejar que el usuario adivine qué pasó.",
                "Proveer el mensaje o hallazgo principal directamente, en lugar de forzar al cerebro a deducirlo ('Las ventas cayeron un 20% en Q3' vs 'Ventas 2023').",
                "Cumplir con normas de la biblioteca.",
                "Hacer que el PDF pese más."
            ],
            respuestaCorrecta: 1,
            explicacion: "Un título activo entrega el insight de inmediato. No asumas que la audiencia sacará las mismas conclusiones al mirar las líneas."
        },
        {
            id: 60,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué transformación matemática se suele aplicar a una columna numérica con sesgo positivo extremo (cola pesada hacia la derecha) para 'normalizar' su distribución visualmente?",
            opciones: [
                "Elevar al cuadrado.",
                "Aplicar logaritmo (ej. np.log1p).",
                "Restar la moda.",
                "Multiplicar por cero."
            ],
            respuestaCorrecta: 1,
            explicacion: "El logaritmo comprime masivamente los rangos altos (outliers) y expande los rangos bajos, acercando distribuciones sesgadas como precios o salarios a una curva normal."
        },
        {
            id: 61,
            tema: "Visualización Avanzada",
            pregunta: "¿Qué es Plotly en comparación con Matplotlib/Seaborn?",
            opciones: [
                "Un framework de Backend SQL.",
                "Una librería diseñada exclusivamente para gráficos dinámicos, interactivos (hover, zoom, pan) usando JavaScript por debajo.",
                "Una versión antigua de Matplotlib.",
                "Una librería de Machine Learning."
            ],
            respuestaCorrecta: 1,
            explicacion: "Plotly genera archivos HTML embebidos con JS, permitiendo la interacción directa del usuario con los datos en el navegador."
        },
        {
            id: 62,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "¿Qué es el Profiling (Pandas Profiling / ydata-profiling)?",
            opciones: [
                "Un modelo de Machine Learning profundo.",
                "Una herramienta que genera automáticamente un reporte HTML gigante con un EDA completo de un DataFrame (correlaciones, missing, histogramas).",
                "Un método para robar datos (Phishing).",
                "Una base de datos NoSQL."
            ],
            respuestaCorrecta: 1,
            explicacion: "ydata-profiling ahorra docenas de horas automatizando el EDA inicial y presentándolo en un dashboard interactivo unificado."
        },
        {
            id: 63,
            tema: "Visualización: Seaborn",
            pregunta: "Si utilizas `sns.jointplot(x='Area', y='Precio', data=df)`, ¿qué visualizarás exactamente?",
            opciones: [
                "Un mapa del mundo.",
                "Un gráfico de dispersión en el centro, y los histogramas marginales de 'Area' y 'Precio' en la parte superior y derecha.",
                "Una tabla de contingencia simple.",
                "Dos líneas superpuestas."
            ],
            respuestaCorrecta: 1,
            explicacion: "El Jointplot es excelente para análisis bivariado, mostrando la relación (dispersión) y las distribuciones univariadas al mismo tiempo."
        },
        {
            id: 64,
            tema: "Análisis Exploratorio de Datos (EDA)",
            pregunta: "Tienes la columna 'Día de la Semana' escrita como texto ('Lunes', 'Martes', etc.). Para pasarla a un algoritmo de Machine Learning que solo acepta números, debes:",
            opciones: [
                "Eliminar la columna porque no sirve.",
                "Codificarla usando One-Hot Encoding (pd.get_dummies) o Label Encoding.",
                "Multiplicarla por 7.",
                "Extraer la raíz cuadrada."
            ],
            respuestaCorrecta: 1,
            explicacion: "Machine Learning requiere vectores numéricos. El encoding transforma atributos de texto en matrices numéricas o variables indicadoras booleanas."
        },
        {
            id: 65,
            tema: "EMI Terminology",
            pregunta: "In Data Preprocessing, what does 'Feature Scaling' or Normalization achieve?",
            opciones: [
                "It deletes all numerical features.",
                "It forces all numeric columns to be on a similar scale (e.g., 0 to 1), preventing variables with large absolute values from dominating algorithms like KNN.",
                "It changes numbers into text.",
                "It scales images to fit on the screen."
            ],
            respuestaCorrecta: 1,
            explicacion: "Algorithms relying on distance calculations (like K-Means or KNN) are heavily skewed if one variable is in millions (Salaries) and another in single digits (Age). Scaling equalizes their weight."
        },
  {
    "id": 66,
    "text": "En el contexto de Machine Learning, ¿cuál es la diferencia fundamental entre el Aprendizaje Supervisado y el No Supervisado?",
    "options": [
      "El supervisado utiliza datos con etiquetas conocidas (target), mientras que el no supervisado busca patrones ocultos en datos sin etiquetar.",
      "El supervisado es exclusivo para predecir números continuos, y el no supervisado para predecir categorías.",
      "El supervisado requiere intervención humana constante durante el entrenamiento, a diferencia del no supervisado que es 100% automático.",
      "No existe diferencia matemática; la distinción es puramente computacional según la memoria RAM utilizada."
    ],
    "correct": 0,
    "explanation": "El Aprendizaje Supervisado entrena algoritmos basándose en ejemplos donde la respuesta correcta (etiqueta) ya se conoce, permitiendo calcular el error. El No Supervisado (como K-Means o PCA) agrupa o reduce dimensiones en datos donde no hay una variable objetivo predefinida.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 67,
    "text": "¿Qué fenómeno ocurre cuando un modelo de Machine Learning memoriza el ruido de los datos de entrenamiento y pierde la capacidad de generalizar con datos nuevos?",
    "options": [
      "Underfitting (Subajuste)",
      "Overfitting (Sobreajuste)",
      "Bias-Variance Tradeoff",
      "Gradient Descent"
    ],
    "correct": 1,
    "explanation": "El Overfitting (Sobreajuste) sucede cuando el modelo es excesivamente complejo y se ajusta tan perfectamente a los datos de entrenamiento (incluyendo su ruido) que falla estrepitosamente al predecir sobre un conjunto de validación o testeo.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 68,
    "text": "En la teoría del 'Bias-Variance Tradeoff', un modelo con alto sesgo (High Bias) generalmente sufre de:",
    "options": [
      "Overfitting, ya que el modelo es demasiado complejo.",
      "Underfitting, ya que el modelo es demasiado simple para capturar los patrones subyacentes.",
      "Fuga de datos (Data Leakage) entre el conjunto de entrenamiento y validación.",
      "Un excelente rendimiento en datos nuevos, pero bajo en entrenamiento."
    ],
    "correct": 1,
    "explanation": "Un Alto Sesgo implica que el modelo hace suposiciones demasiado fuertes o rígidas (como ajustar una línea recta a datos logarítmicos). Esto causa Underfitting, es decir, el modelo no aprende ni siquiera los patrones de los datos de entrenamiento.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 69,
    "text": "¿Cuál es el propósito principal de dividir el dataset en conjuntos de Entrenamiento (Train) y Prueba (Test)?",
    "options": [
      "Reducir el tiempo de procesamiento descartando el conjunto de prueba.",
      "Simular un escenario del mundo real para evaluar objetivamente la capacidad de generalización del modelo en datos nunca antes vistos.",
      "Garantizar que el modelo alcance un 100% de precisión matemática.",
      "Evitar la necesidad de normalizar o escalar las variables numéricas."
    ],
    "correct": 1,
    "explanation": "Separar los datos garantiza que podamos medir el rendimiento real del modelo. Si evaluáramos el modelo con los mismos datos que usó para entrenar, la métrica de precisión sería ilusoria y estaríamos premiando el sobreajuste.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 70,
    "text": "En validación cruzada (Cross-Validation) de K-folds (K=5), ¿cómo se distribuyen los datos durante el proceso?",
    "options": [
      "Los datos se dividen en 5 partes. El modelo se entrena 5 veces, usando cada vez 4 partes para entrenar y 1 parte distinta para validar.",
      "Los datos se dividen en 5 partes, y solo se entrena una vez usando la parte más grande.",
      "El algoritmo copia los datos 5 veces para aumentar el tamaño de la muestra sintéticamente.",
      "Se entrenan 5 modelos diferentes (ej. Regresión, Random Forest, SVM) simultáneamente sobre el mismo conjunto."
    ],
    "correct": 0,
    "explanation": "K-Folds Cross-Validation asegura que todos los datos sean utilizados tanto para entrenamiento como para validación iterativamente. Se promedia el resultado de las K iteraciones para obtener una métrica de rendimiento mucho más robusta y confiable.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 71,
    "text": "Si tu dataset contiene un 99% de transacciones normales y solo un 1% de fraudes, ¿cuál de las siguientes afirmaciones es correcta?",
    "options": [
      "La exactitud (Accuracy) es la mejor métrica; un 99% indicará que el modelo detecta bien los fraudes.",
      "Estamos frente a un problema de clases desbalanceadas (Imbalanced Classes). Métricas como Precision, Recall o el F1-Score son requeridas.",
      "Este es un problema de regresión lineal, ya que los porcentajes son números continuos.",
      "No se puede utilizar Machine Learning en datasets donde las clases no estén 50% - 50% distribuidas."
    ],
    "correct": 1,
    "explanation": "En datos desbalanceados, un modelo que prediga ciegamente 'Transacción Normal' siempre obtendrá un 99% de Exactitud sin haber detectado un solo fraude. Por ello, debemos evaluar el Recall y Precision para la clase minoritaria.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 72,
    "text": "¿Qué técnica se utiliza para evitar que variables con escalas muy grandes (ej. Salarios en millones) dominen injustamente a variables con escalas pequeñas (ej. Edad en decenas) en algoritmos basados en distancias?",
    "options": [
      "One-Hot Encoding",
      "Feature Scaling (Estandarización / Normalización)",
      "Cross-Validation",
      "Imputación de valores faltantes (Imputation)"
    ],
    "correct": 1,
    "explanation": "El Feature Scaling transforma los datos numéricos a una escala común (como media 0 y varianza 1 en estandarización) asegurando que algoritmos como KNN, K-Means o Regresión Logística traten a todas las variables numéricas con igual importancia inicial.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 73,
    "text": "Si una variable categórica tiene los valores ['Rojo', 'Verde', 'Azul'], ¿por qué no es recomendable codificarla directamente como [1, 2, 3] en una regresión lineal?",
    "options": [
      "Porque los números 1, 2 y 3 implican un orden o jerarquía matemática falsa que el modelo intentará interpretar (ej. Asumirá que Azul es tres veces mayor que Rojo).",
      "Porque los lenguajes de programación no pueden leer números menores a 10.",
      "Porque los colores solo pueden procesarse mediante algoritmos de procesamiento de imágenes.",
      "Sí es recomendable; es la única forma de procesar variables categóricas nominales."
    ],
    "correct": 0,
    "explanation": "Para variables categóricas sin orden lógico (nominales), usar Label Encoding crea una falsa jerarquía matemática. La técnica correcta es utilizar variables Dummy o One-Hot Encoding (creando columnas binarias independientes para cada color).",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 74,
    "text": "La frase 'Garbage In, Garbage Out' (Basura entra, basura sale) en Ciencia de Datos hace referencia a:",
    "options": [
      "La ineficiencia de los recolectores de basura (Garbage Collectors) en la memoria de Python.",
      "La importancia de la fase de preparación y limpieza de datos; un algoritmo no puede aprender patrones reales si los datos son de mala calidad.",
      "El descarte de los hiperparámetros que no mejoran el modelo.",
      "La necesidad de eliminar los archivos temporales después de entrenar."
    ],
    "correct": 1,
    "explanation": "Es un principio axiomático: la calidad de las predicciones de un modelo de Inteligencia Artificial depende fundamentalmente de la calidad, limpieza y representatividad de los datos con los que fue entrenado.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 75,
    "text": "¿Qué es un 'Hiperparámetro' en el contexto de Machine Learning?",
    "options": [
      "Los pesos y coeficientes matemáticos que el modelo aprende automáticamente durante el entrenamiento.",
      "Variables externas al modelo que el científico de datos debe configurar manualmente ANTES del entrenamiento (ej. profundidad máxima de un árbol, tasa de aprendizaje).",
      "El conjunto de datos utilizado exclusivamente para probar el modelo final.",
      "Métricas de evaluación como la curva ROC o el MSE."
    ],
    "correct": 1,
    "explanation": "Los parámetros los aprende el modelo iterando sobre los datos (ej. las pendientes de la regresión). Los hiperparámetros son decisiones arquitectónicas que el humano define previamente y que guían cómo aprenderá el algoritmo.",
    "topic": "Conceptos Fundamentales de ML"
  },
  {
    "id": 76,
    "text": "En Scikit-Learn, ¿cuál es el estándar metodológico para entrenar cualquier modelo predictivo (instanciar y ajustar)?",
    "options": [
      "modelo.train(X, y)",
      "modelo.fit(X_train, y_train)",
      "modelo.predict(X_test)",
      "modelo.compile(X, y)"
    ],
    "correct": 1,
    "explanation": "La API de Scikit-Learn se basa en una interfaz uniforme donde el método `.fit(X, y)` es universal para calcular los parámetros matemáticos del modelo u objeto transformador basándose en los datos de entrenamiento.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 77,
    "text": "Al preprocesar datos, ¿por qué es CRÍTICO realizar el escalado (ej. StandardScaler) aplicando `.fit_transform()` en el conjunto de entrenamiento, pero SOLO `.transform()` en el conjunto de prueba?",
    "options": [
      "Para ahorrar memoria RAM durante la inferencia.",
      "Para evitar Fuga de Datos (Data Leakage). El modelo no debe conocer información global (como la media o desviación) del conjunto de prueba durante el entrenamiento.",
      "Porque Scikit-Learn arroja un error de sintaxis si se usa fit_transform() dos veces seguidas.",
      "No es crítico, se debe aplicar fit_transform() a la base de datos completa antes de separar en Train y Test."
    ],
    "correct": 1,
    "explanation": "La Fuga de Datos invalida la evaluación predictiva. Si escalas todos los datos juntos antes del split, información matemática del futuro (conjunto Test) contamina el cálculo de la media, engañando al modelo y dando resultados ilusorios.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 78,
    "text": "¿Qué utilidad ofrece la clase `Pipeline` de Scikit-Learn?",
    "options": [
      "Conectar visualmente nodos de análisis en un entorno gráfico.",
      "Paralelizar el procesamiento utilizando múltiples núcleos de la tarjeta gráfica (GPU).",
      "Encadenar múltiples pasos de procesamiento (ej. Imputación, Escalado y Modelo) en un solo objeto para garantizar el orden y evitar fuga de datos.",
      "Importar datos masivos desde bases de datos distribuidas en la nube."
    ],
    "correct": 2,
    "explanation": "Los Pipelines empaquetan secuencialmente transformadores y un estimador final. Permiten llamar a `.fit()` y `.predict()` una sola vez, asegurando de forma automática que los datos de prueba nunca se utilicen inadvertidamente para ajustar los transformadores.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 79,
    "text": "¿Qué función de Scikit-Learn es la estándar para dividir un dataset en Entrenamiento y Prueba?",
    "options": [
      "model_selection.train_test_split",
      "preprocessing.divide_dataset",
      "utils.split_data",
      "metrics.train_test"
    ],
    "correct": 0,
    "explanation": "La función `train_test_split` del módulo `sklearn.model_selection` baraja aleatoriamente los datos y los separa en X_train, X_test, y_train y y_test basándose en la proporción solicitada (comúnmente 80/20 o 70/30).",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 80,
    "text": "En `train_test_split`, ¿para qué sirve el parámetro `random_state`?",
    "options": [
      "Para inyectar ruido aleatorio en los datos y mejorar la robustez.",
      "Para fijar una semilla algorítmica y garantizar que la partición sea exactamente la misma en ejecuciones futuras (Reproducibilidad).",
      "Para mezclar únicamente la variable objetivo 'y' sin alterar la matriz 'X'.",
      "Para decidir el porcentaje de datos de prueba."
    ],
    "correct": 1,
    "explanation": "Fijar un `random_state` (ej. random_state=42) permite que otros analistas (o tú mismo en el futuro) obtengan exactamente la misma separación aleatoria, permitiendo que los resultados del modelo sean reproducibles y comparables.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 81,
    "text": "¿Cuál es la estructura matricial esperada por Scikit-Learn para las variables independientes (X) y la variable objetivo (y)?",
    "options": [
      "X e y deben ser ambos arreglos unidimensionales (Series).",
      "X debe ser un arreglo bidimensional (Matriz/DataFrame) y y un arreglo unidimensional (Vector/Series).",
      "Ambos deben ser arreglos bidimensionales (Matrices).",
      "El formato no importa mientras sean listas de Python."
    ],
    "correct": 1,
    "explanation": "Scikit-Learn espera por convención matemática que `X` sea una matriz bidimensional con forma `(n_muestras, n_características)` y que `y` sea un vector unidimensional con forma `(n_muestras,)` correspondiente a la variable a predecir.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 82,
    "text": "Si tienes una variable categórica 'Ciudad' con 50 ciudades distintas, ¿cuál es una desventaja de aplicar One-Hot Encoding?",
    "options": [
      "Provoca un error matemático por división entre cero.",
      "Añadirá 50 nuevas columnas binarias al dataset, expandiendo masivamente la dimensionalidad y requiriendo más poder computacional (Maldición de la Dimensionalidad).",
      "One-Hot Encoding solo funciona con variables numéricas.",
      "Borrará automáticamente las ciudades con menos habitantes."
    ],
    "correct": 1,
    "explanation": "Generar columnas Dummy para características de altísima cardinalidad crea matrices enormes y dispersas (con muchos ceros), ralentizando el entrenamiento y fomentando el Sobreajuste. Se suelen recomendar técnicas como Hashing u otros encodings en estos casos.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 83,
    "text": "El transformador `SimpleImputer` de Scikit-Learn se utiliza primordialmente para:",
    "options": [
      "Normalizar distribuciones asimétricas.",
      "Convertir texto a vectores numéricos (NLP).",
      "Rellenar (imputar) datos nulos o faltantes en el dataset usando estrategias como la media, mediana o valor más frecuente.",
      "Eliminar outliers o valores atípicos del dataset."
    ],
    "correct": 2,
    "explanation": "La imputación es un paso crucial en la limpieza de datos. `SimpleImputer` automatiza el reemplazo de valores NaN, permitiendo además integrarse dentro de un Pipeline para asegurar que estrategias (como rellenar con la mediana) se calculen solo con los datos de Train.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 84,
    "text": "¿Qué ocurre internamente cuando llamas al método `predict(X_test)` en un modelo entrenado en Scikit-Learn?",
    "options": [
      "El modelo descarta lo aprendido y se vuelve a entrenar con `X_test`.",
      "El modelo toma las características de `X_test` y aplica las fórmulas o reglas previamente aprendidas durante la fase de `.fit()` para generar las respuestas.",
      "El modelo compara `X_test` con el vector objetivo original para medir el error automáticamente.",
      "Aplica técnicas de escalado automático sobre las variables de prueba."
    ],
    "correct": 1,
    "explanation": "La inferencia o predicción es matemáticamente rápida porque el modelo únicamente evalúa los nuevos datos pasando las variables a través de los pesos ya consolidados (entrenados) en la fase previa.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 85,
    "text": "¿Cómo puedes guardar tu modelo predictivo ya entrenado en Scikit-Learn para usarlo en el futuro o desplegarlo en producción?",
    "options": [
      "Copiando el código en un archivo de texto.",
      "Utilizando librerías de serialización como `joblib` o `pickle` para exportar el objeto Python a un archivo físico.",
      "Scikit-Learn no permite exportar modelos; deben reentrenarse desde cero cada vez que se ejecute el servidor.",
      "Enviando el objeto a una base de datos SQL como texto plano."
    ],
    "correct": 1,
    "explanation": "La serialización (como `joblib.dump(modelo, 'modelo.pkl')`) toma el objeto del modelo con todos los coeficientes matemáticos ya calculados y lo guarda en el disco duro. Esto es vital para MLOps e implementación en aplicaciones reales.",
    "topic": "Scikit-Learn y Preprocesamiento"
  },
  {
    "id": 86,
    "text": "En el modelo matemático de Regresión Lineal Simple (y = mx + b), ¿qué representa el parámetro 'm' (coeficiente)?",
    "options": [
      "El punto exacto donde la línea de regresión cruza el eje Y.",
      "La varianza total de los datos analizados.",
      "La pendiente de la línea; indica el cambio esperado en 'y' por cada unidad de incremento en 'x'.",
      "El error cuadrático medio del modelo."
    ],
    "correct": 2,
    "explanation": "La pendiente (m) cuantifica la relación directa o inversa. Si m = 2, predecimos que por cada punto adicional en la variable independiente X, la variable objetivo Y aumentará en 2 unidades.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 87,
    "text": "¿Cuál es el algoritmo matemático que Scikit-Learn (y la regresión lineal tradicional) utiliza internamente para encontrar la línea de mejor ajuste?",
    "options": [
      "Método de Mínimos Cuadrados Ordinarios (OLS). Busca minimizar la suma de los errores al cuadrado entre los puntos reales y la línea.",
      "Agrupamiento por Distancia Euclidiana (K-Means).",
      "Entropía Cruzada Binaria (Binary Cross-Entropy).",
      "Descomposición de Valores Singulares (SVD) sobre valores booleanos."
    ],
    "correct": 0,
    "explanation": "El método OLS (Ordinary Least Squares) calcula matemáticamente la pendiente y el intercepto exactos que garantizan la distancia vertical cuadrada más pequeña (residuos) desde los datos reales hasta la recta predictiva.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 88,
    "text": "¿Qué métrica de evaluación mide el 'Error Absoluto Medio' y se interpreta fácilmente en las mismas unidades que la variable original (Ej. Pesos, Dólares, Edades)?",
    "options": [
      "R-Cuadrado (R2 Score)",
      "Mean Squared Error (MSE)",
      "Mean Absolute Error (MAE)",
      "Root Mean Squared Log Error (RMSLE)"
    ],
    "correct": 2,
    "explanation": "El MAE (Mean Absolute Error) promedia las diferencias absolutas entre predicciones y valores reales. Al no elevar los errores al cuadrado (como hace el MSE), no penaliza tan severamente los outliers y conserva la escala original de medida.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 89,
    "text": "Si un modelo de Regresión tiene un Coeficiente de Determinación (R2 Score) de 0.85, significa que:",
    "options": [
      "El modelo tiene una precisión del 85% para clasificar categorías.",
      "El modelo explica el 85% de la varianza (variabilidad) de la variable objetivo en función de las variables independientes.",
      "El error promedio de cada predicción es de 0.85 unidades.",
      "El 85% de las variables independientes son estadísticamente irrelevantes."
    ],
    "correct": 1,
    "explanation": "El R2 (R-Squared) es una métrica estadística entre 0 y 1 que indica la proporción de la varianza en la variable dependiente que es predecible a partir de las variables independientes. Un R2 de 0.85 es generalmente considerado un ajuste excelente.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 90,
    "text": "¿Por qué el Error Cuadrático Medio (MSE) suele ser preferido como función de pérdida para entrenar regresiones (como en Redes Neuronales) frente al MAE?",
    "options": [
      "Porque ignorar los valores atípicos siempre es la mejor decisión.",
      "Porque es una función matemáticamente suave y derivable en todos sus puntos, lo que facilita el uso del descenso del gradiente.",
      "Porque siempre genera valores entre 0 y 1.",
      "Porque es la única métrica soportada por Scikit-Learn."
    ],
    "correct": 1,
    "explanation": "Elevar al cuadrado los errores genera una parábola convexa. Su derivada matemática es clara y continua en todos los puntos, permitiendo a los algoritmos de optimización encontrar el 'fondo' (error mínimo) de manera estable y eficiente.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 91,
    "text": "Un supuesto fundamental para que los coeficientes de una Regresión Lineal Múltiple sean confiables es la ausencia de 'Multicolinealidad'. ¿Qué significa esto?",
    "options": [
      "Que los datos deben tener múltiples colores o etiquetas para ser procesados.",
      "Que los residuos (errores) del modelo no deben tener una distribución normal.",
      "Que las variables predictoras (X) no deben estar altamente correlacionadas entre sí.",
      "Que la relación entre X e Y debe ser estrictamente exponencial."
    ],
    "correct": 2,
    "explanation": "Si dos variables predictoras están casi perfectamente correlacionadas (ej. Área de una casa en m2 y Área en pies cuadrados), aportan información redundante. Esto desestabiliza los cálculos matemáticos del modelo, inflando la varianza de los coeficientes estimados.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 92,
    "text": "¿Qué técnica de regularización añade una penalización equivalente al cuadrado de la magnitud de los coeficientes para encogerlos y evitar el sobreajuste (Overfitting) en regresión?",
    "options": [
      "Regresión Lasso (Regularización L1)",
      "Regresión Ridge (Regularización L2)",
      "Validación Cruzada Espacial",
      "Gradient Boosting"
    ],
    "correct": 1,
    "explanation": "La Regresión Ridge (L2) reduce progresivamente el tamaño de los coeficientes de todas las variables, penalizando coeficientes grandes. A diferencia de Lasso (L1), Ridge rara vez fuerza los coeficientes exactamente a cero.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 93,
    "text": "Durante la evaluación de un modelo de predicción de precios de casas, descubres que tu Root Mean Squared Error (RMSE) es de 50,000 USD. ¿Cómo interpretas esto?",
    "options": [
      "El modelo se equivoca en promedio por alrededor de 50,000 dólares en sus predicciones. El equipo de negocio debe determinar si este margen es aceptable.",
      "El modelo es inútil porque el error no es cercano a cero.",
      "Significa que el 50% de las casas fueron evaluadas correctamente.",
      "El modelo está sobreajustado (Overfitting) masivamente."
    ],
    "correct": 0,
    "explanation": "El RMSE conserva las unidades del problema (dólares). Su interpretación directa es el margen de error promedio del modelo. Un error de 50,000 USD puede ser catastrófico para viviendas económicas, pero excelente para mansiones de lujo. El contexto dicta su validez.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 94,
    "text": "Si una variable objetivo Y tiene una relación geométrica o logarítmica respecto a X, intentar aplicar una Regresión Lineal pura resultará en:",
    "options": [
      "El mejor ajuste posible.",
      "Un modelo de alta precisión pero difícil interpretabilidad.",
      "Underfitting (Subajuste), evidenciado porque los residuos formarán un patrón curvo claro en lugar de ruido aleatorio.",
      "Generación automática de características polinómicas en Scikit-Learn."
    ],
    "correct": 2,
    "explanation": "La regresión lineal asume estrictamente relaciones lineales. Si fuerzas una línea recta sobre una curva exponencial, tendrás subajuste. Debes transformar los datos (ej. aplicar Logaritmo a Y) o usar Regresión Polinómica.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 95,
    "text": "¿Qué función cumple el término 'Intercepto' (bias term o b) en un modelo de regresión?",
    "options": [
      "Asegura que la predicción nunca sea negativa.",
      "Define el valor base predeterminado de 'Y' cuando todas las variables predictoras 'X' son exactamente igual a cero.",
      "Interrumpe el entrenamiento si se detecta Fuga de Datos.",
      "Multiplica las pendientes de las variables de alta importancia."
    ],
    "correct": 1,
    "explanation": "El intercepto permite que la recta de regresión se desplace verticalmente para ajustarse a los datos. Si el intercepto fuera 0, el modelo estaría forzado absurdamente a predecir 0 siempre que los inputs sean 0, sin importar el contexto.",
    "topic": "Regresión Lineal y Métricas"
  },
  {
    "id": 96,
    "text": "A pesar de llamarse Regresión Logística, este algoritmo se utiliza principalmente para resolver problemas de:",
    "options": [
      "Clasificación (ej. Spam o No Spam, Tumor Maligno o Benigno).",
      "Regresión Continua (ej. Predicción del clima o valores bursátiles).",
      "Agrupamiento No Supervisado.",
      "Procesamiento de Lenguaje Natural generativo."
    ],
    "correct": 0,
    "explanation": "El término 'regresión' es un artefacto histórico estadístico. La Regresión Logística aplica una función Sigmoide para transformar una salida lineal en un valor probabilístico (entre 0 y 1), ideal para umbrales de decisión binarios (Clasificación).",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 97,
    "text": "En una Matriz de Confusión para un diagnóstico médico, ¿qué representan los Falsos Negativos (Tipo II)?",
    "options": [
      "Pacientes sanos a los que el modelo diagnosticó incorrectamente como enfermos.",
      "Pacientes realmente enfermos a los que el modelo declaró incorrectamente como sanos.",
      "Pacientes enfermos diagnosticados correctamente.",
      "La suma total de todos los errores del modelo."
    ],
    "correct": 1,
    "explanation": "Un Falso Negativo ocurre cuando el modelo predice la clase Negativa (ej. 'Estás sano') pero la realidad era la clase Positiva (ej. 'Estás enfermo'). En medicina, este es frecuentemente el error más peligroso a evitar.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 98,
    "text": "La métrica 'Recall' (Sensibilidad) responde matemáticamente a la pregunta:",
    "options": [
      "De todas las predicciones positivas que hizo el modelo, ¿cuántas eran realmente ciertas?",
      "Del total de casos verdaderamente positivos en la realidad, ¿qué porcentaje logró encontrar y clasificar correctamente mi modelo?",
      "¿Cuál es la proporción total de predicciones correctas sobre el dataset?",
      "¿Cuántos Falsos Positivos hubo?"
    ],
    "correct": 1,
    "explanation": "El Recall (Verdaderos Positivos / (Verdaderos Positivos + Falsos Negativos)) evalúa la capacidad del modelo para no dejar escapar a ningún caso positivo (alta sensibilidad). Fundamental en detección de fraude médico o bancario.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 99,
    "text": "La métrica 'Precision' (Precisión Positiva) responde matemáticamente a la pregunta:",
    "options": [
      "Del total de casos verdaderamente positivos, ¿qué porcentaje encontré?",
      "¿Cuál es el porcentaje general de aciertos en todas las clases?",
      "De todas las veces que mi modelo gritó '¡Lobo!' (predicción Positiva), ¿qué porcentaje de veces había realmente un lobo?",
      "¿Cuál es el área bajo la curva ROC?"
    ],
    "correct": 2,
    "explanation": "La Precisión (Verdaderos Positivos / (Verdaderos Positivos + Falsos Positivos)) penaliza fuertemente a un modelo que genera muchas alarmas falsas. Es vital cuando el costo de un Falso Positivo es alto, como en un filtro de Spam de correos importantes.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 100,
    "text": "¿Qué métrica es la media armónica entre Precision y Recall, ofreciendo un balance único ideal para datasets desbalanceados?",
    "options": [
      "Exactitud (Accuracy)",
      "Curva ROC",
      "F1-Score",
      "Mean Absolute Error"
    ],
    "correct": 2,
    "explanation": "El F1-Score castiga a los modelos que tienen una disparidad extrema entre Precision y Recall. Para que el F1-Score sea alto, el modelo debe ser simultáneamente preciso y sensible.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 101,
    "text": "Al entrenar un algoritmo de Regresión Logística, el umbral de decisión por defecto de `.predict()` es 0.5. Si deseas maximizar la detección de una enfermedad (Priorizar Recall) asumiendo más alarmas falsas, tú deberías:",
    "options": [
      "Aumentar el umbral de decisión a 0.8 utilizando .predict_proba()",
      "Bajar el umbral de decisión a 0.2 utilizando .predict_proba()",
      "Cambiar el modelo a Regresión Lineal.",
      "Eliminar los datos de la enfermedad para equilibrar las clases."
    ],
    "correct": 1,
    "explanation": "Al reducir el umbral probabilístico de 0.5 a 0.2, le indicamos al modelo que si hay incluso un 20% de probabilidad matemática de enfermedad, dispare la alarma positiva. Aumentamos el Recall a expensas de la Precision.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 102,
    "text": "¿Qué representa gráficamente el Área Bajo la Curva (AUC-ROC) de un clasificador?",
    "options": [
      "La capacidad agregada del modelo para separar y distinguir correctamente la clase positiva de la negativa bajo todos los umbrales de decisión posibles.",
      "La suma de los Falsos Negativos a lo largo del tiempo.",
      "El número de nodos en la capa oculta de una red neuronal.",
      "La relación estrictamente lineal entre las variables de entrada."
    ],
    "correct": 0,
    "explanation": "Un AUC de 1.0 implica un modelo perfecto. Un AUC de 0.5 implica que el modelo no tiene capacidad discriminativa (lanza una moneda al azar). Evalúa el Trade-off entre el True Positive Rate y el False Positive Rate.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 103,
    "text": "¿Cuál es la función matemática que transforma cualquier valor lineal continuo (-inf a +inf) a un rango estricto entre 0 y 1 en la Regresión Logística?",
    "options": [
      "Función Identidad",
      "Función ReLU",
      "Función Sigmoide (o Logística)",
      "Función Coseno"
    ],
    "correct": 2,
    "explanation": "La función Sigmoide ( 1 / (1 + e^-x) ) comprime los ejes formando una curva en 'S'. Todo número infinito negativo se acerca a 0, y el infinito positivo a 1. Es la base conceptual probabilística de la clasificación moderna.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 104,
    "text": "Si aplicas `.predict_proba(X_test)` en Scikit-Learn sobre un problema de clasificación binaria, ¿qué formato numérico devuelve el arreglo resultante?",
    "options": [
      "Un vector con valores de 0 o 1 absolutos.",
      "Una matriz de dos columnas: la primera contiene la probabilidad de pertenecer a la clase 0 y la segunda la probabilidad para la clase 1 (sumando 1.0).",
      "Un único valor decimal representando el nivel de confianza general.",
      "Una matriz de confusión visualizada en texto."
    ],
    "correct": 1,
    "explanation": "El método .predict_proba() devuelve probabilidades continuas. Para dos clases, devuelve un array nx2 donde las columnas representan `P(Y=0|X)` y `P(Y=1|X)`. Permitiendo análisis detallados y manipulación de umbrales.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 105,
    "text": "¿Cuál de las siguientes estrategias NO es válida para lidiar con un dataset altamente desbalanceado en clasificación?",
    "options": [
      "Aplicar SMOTE para generar muestras sintéticas de la clase minoritaria.",
      "Aplicar Undersampling (submuestreo) para reducir artificialmente la clase mayoritaria.",
      "Usar Exactitud (Accuracy) como métrica única y definitiva del modelo.",
      "Ajustar el hiperparámetro `class_weight='balanced'` en los algoritmos de Scikit-Learn."
    ],
    "correct": 2,
    "explanation": "En datasets desbalanceados, la métrica Accuracy es engañosa (Paradoja de la Precisión). Un modelo inútil que siempre prediga la clase mayoritaria obtendrá altísima exactitud. Deben combinarse técnicas de remuestreo (SMOTE) y pesos algorítmicos junto con análisis F1/ROC.",
    "topic": "Regresión Logística y Clasificación"
  },
  {
    "id": 106,
    "text": "¿Cuál es el objetivo primordial del algoritmo K-Means en Aprendizaje No Supervisado?",
    "options": [
      "Clasificar correos electrónicos usando etiquetas preexistentes.",
      "Predecir un valor de inventario para el mes siguiente.",
      "Agrupar (Clustering) datos en 'K' grupos basándose en similitudes o distancias matemáticas sin conocer las etiquetas de antemano.",
      "Eliminar dimensiones redundantes reduciendo columnas."
    ],
    "correct": 2,
    "explanation": "K-Means es el algoritmo clásico de agrupamiento. Descubre estructuras ocultas, segmentando los datos (ej. clientes, comportamiento de usuarios) en grupos coherentes llamados 'Clusters' mediante cálculos iterativos de distancia a centroides.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 107,
    "text": "En el funcionamiento interno de K-Means, ¿qué son los 'Centroides'?",
    "options": [
      "Las coordenadas promedio espaciales (centro de gravedad) que representan matemáticamente a cada grupo o cluster.",
      "Las variables objetivo que se intentan predecir.",
      "Puntos atípicos (outliers) que el algoritmo rechaza.",
      "Líneas divisorias hiperplanas creadas por vectores de soporte."
    ],
    "correct": 0,
    "explanation": "El algoritmo posiciona inicialmente K centroides al azar, asigna cada punto al centroide más cercano, recalcula la posición promedio del centroide con los nuevos puntos y repite hasta que ya no haya movimiento significativo.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 108,
    "text": "¿Por qué es estrictamente necesario aplicar Feature Scaling (Escalado/Estandarización) ANTES de ejecutar K-Means?",
    "options": [
      "Porque Scikit-Learn requiere que los datos sean menores a 1.",
      "Porque K-Means utiliza distancias euclidianas. Variables con gran magnitud numérica dominarán por completo la formación de los grupos, ignorando a las variables de pequeña magnitud.",
      "Para reducir el número de columnas (Dimensionalidad).",
      "Para que el algoritmo funcione con variables de texto de manera automática."
    ],
    "correct": 1,
    "explanation": "Al medir distancias geométricas, una variable como 'Salario' (valores en miles) aplastará matemáticamente la influencia de una variable como 'Edad' (valores pequeños). Estandarizar otorga un peso equitativo inicial a todas las características.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 109,
    "text": "¿Qué métrica y método heurístico se utiliza comúnmente para determinar el número óptimo de clusters (K) en K-Means?",
    "options": [
      "Cross-Validation Stratified",
      "Accuracy y Matriz de Confusión",
      "El Método del Codo (Elbow Method) midiendo la Inercia o Suma de Errores Cuadráticos Intra-cluster.",
      "Entropía de la Información e Impureza de Gini."
    ],
    "correct": 2,
    "explanation": "El método del codo grafica la 'Inercia' (suma de las distancias al cuadrado desde cada punto a su centroide) frente al número de K. El punto donde la gráfica hace un 'quiebre' abrupto (como un codo) sugiere el mejor balance entre cohesión del grupo y parsimonia del modelo.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 110,
    "text": "¿Qué es Análisis de Componentes Principales (PCA)?",
    "options": [
      "Un algoritmo de agrupamiento superior a K-Means.",
      "Una técnica de reducción de dimensionalidad que transforma características correlacionadas en un nuevo conjunto de componentes ortogonales (no correlacionados), capturando la varianza máxima de los datos.",
      "Un modelo de clasificación basado en distancias a los vecinos más cercanos.",
      "Una base de datos documental optimizada para consultas de alta latencia."
    ],
    "correct": 1,
    "explanation": "PCA permite condensar un dataset de cientos de columnas en unas pocas dimensiones (Componentes Principales) que retienen la mayor cantidad de información o varianza posible, mitigando la Maldición de la Dimensionalidad y permitiendo visualización en 2D o 3D.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 111,
    "text": "En el contexto de PCA, si el 'Componente Principal 1' captura el 45% de la varianza explicada, y el 'Componente 2' el 30%, ¿qué significa?",
    "options": [
      "Que el modelo de clasificación predice con un 75% de exactitud.",
      "Que juntos, proyectando los datos en solo esas dos nuevas dimensiones geométricas, retienen el 75% de toda la información (variabilidad matemática) del dataset original multivariado.",
      "Que hay un 25% de probabilidad de fuga de datos.",
      "Que el algoritmo falló por pérdida crítica de información."
    ],
    "correct": 1,
    "explanation": "La 'Varianza Explicada' es la medida de cuánta información del dataset original ha sobrevivido tras la reducción de dimensión. Retener el 75%-80% de la información usando solo 2 componentes es un excelente logro para facilitar análisis y entrenamiento de machine learning.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 112,
    "text": "¿Cuál de las siguientes es la principal desventaja del PCA al aplicarlo en preprocesamiento de datos?",
    "options": [
      "Es computacionalmente imposible para datasets de más de 100 filas.",
      "Causa siempre sobreajuste en redes neuronales.",
      "Pérdida dramática de interpretabilidad humana; los nuevos Componentes son combinaciones matemáticas complejas, ya no representan variables originales comprensibles como 'Edad' o 'Ingresos'.",
      "Incompatibilidad total con la librería Scikit-Learn."
    ],
    "correct": 2,
    "explanation": "Al proyectar ortogonalmente el espacio hiperdimensional en direcciones de máxima varianza, el Componente Principal 1 (PC1) es una ecuación matemática de coeficientes mezclados. Explicarle esto al equipo de negocio humano se vuelve un desafío gigante de 'Caja Negra'.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 113,
    "text": "¿Por qué PCA suele usarse inmediatamente ANTES de entrenar un modelo complejo como una Red Neuronal o Regresión Logística?",
    "options": [
      "Para añadir más columnas y dar más contexto al algoritmo.",
      "Para reducir el ruido, acelerar masivamente los tiempos de entrenamiento (al tener menos columnas) y mitigar problemas de multicolinealidad.",
      "Para garantizar que no haya variables nulas.",
      "Para generar predicciones probabilísticas automáticas."
    ],
    "correct": 1,
    "explanation": "La reducción de dimensionalidad con PCA no solo ahorra memoria y recursos de CPU/GPU, sino que los componentes resultantes son ortogonales entre sí, resolviendo inmediatamente cualquier problema previo de multicolinealidad (variables predictoras correlacionadas).",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 114,
    "text": "¿Qué métrica alternativa de agrupamiento permite cuantificar si un cluster está cohesionado internamente y al mismo tiempo separado de los demás clusters, variando de -1 a 1?",
    "options": [
      "Coeficiente de Silueta (Silhouette Score)",
      "MSE (Error Cuadrático Medio)",
      "Distancia de Mahalanobis",
      "Métrica R2"
    ],
    "correct": 0,
    "explanation": "El Silhouette Score evalúa la calidad matemática geométrica de los clústeres generados. Un valor cercano a 1 indica clústeres densos y bien separados; cercano a 0 indica solapamiento, y -1 indica que datos fueron asignados al grupo equivocado.",
    "topic": "Algoritmos No Supervisados"
  },
  {
    "id": 115,
    "text": "Si aplicas K-Means con K=10, pero observas que 6 de esos grupos están vacíos o contienen solo a 1 o 2 outliers, ¿qué puedes deducir del modelo?",
    "options": [
      "El modelo convergió al óptimo global perfectamente.",
      "Elegiste una 'K' demasiado alta, dividiendo artificialmente o creando ruido (Over-clustering). Se requiere reducir la 'K' evaluando el Método del Codo o tratar previamente los Outliers.",
      "K-Means no funcionó porque no se aplicó One-Hot Encoding a las variables numéricas.",
      "Debes usar una Regresión Logística en lugar de K-Means."
    ],
    "correct": 1,
    "explanation": "Un exceso de clústeres fuerza al algoritmo a encontrar sub-grupos sin sentido estadístico, a menudo 'atrapando' ruido u observaciones aisladas. El tratamiento previo de valores atípicos (Outliers) y análisis de inercia es mandatorio en aprendizaje no supervisado.",
    "topic": "Algoritmos No Supervisados"
  }

    ]
};
