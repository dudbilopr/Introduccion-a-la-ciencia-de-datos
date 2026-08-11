# Guía del Docente - Semana 2: Ecosistema Python y Google Colab

## 📅 Agenda de la Clase (3 Horas / 180 Minutos)

| Hora | Actividad | Descripción |
| :--- | :--- | :--- |
| **07:00 - 07:10** | **Llegada y Organización** | Saludo, registro de asistencia, preparación del entorno. Recordatorio de la regla de puntualidad (7:00 AM). |
| **07:10 - 07:30** | **Espacio EMI (English as a Medium of Instruction)** | Warmup en pizarra, visualización del video sobre "Data Types" y actividad interactiva. |
| **07:30 - 08:15** | **Teoría: ¿Qué es Python y Google Colab?** | Introducción al lenguaje, características, ventajas de Colab vs local, concepto de Notebooks. |
| **08:15 - 08:30** | **☕ Pausa Cognitiva** | Break para descansar. |
| **08:30 - 09:30** | **Hands-on: Pair Programming (Parte 1)** | Primeros pasos en Colab: Variables, Listas, y Generación de Datos Sintéticos. |
| **09:30 - 09:50** | **Hands-on: Pair Programming (Parte 2)** | Introducción a Pandas: Guardar y leer CSV, análisis descriptivo básico. |
| **09:50 - 10:00** | **Cierre y Q&A** | Push inicial a GitHub (guardar el notebook) y conclusiones. |

---

## 🗣️ Guía para el Espacio EMI (20 Minutos)

El objetivo de esta sección es introducir vocabulario técnico en inglés utilizando el video recomendado.

### Paso 1: Warmup en la Pizarra Digital (5 mins)
1. Abre la pizarra digital de la clase.
2. Dibuja o escribe una tabla vacía.
3. **Instrucciones para los estudiantes:** "Vamos a hacer un calentamiento. Escriban en inglés los 6 tipos de datos básicos que existen en programación. Quien sepa uno, pase a la pizarra y escríbalo."
4. **Respuestas esperadas:** Character, String, Integer, Real (o Float), Date, Boolean.

### Paso 2: Visualización del Video (5 mins)
1. Reproduce el video: [Six Data Types](https://www.youtube.com/watch?v=-kog3ZIWWOI).
2. Pide a los estudiantes que presten atención a las dos formas de clasificar los datos (Data Classifications):
   - *Qualitative vs Quantitative*
   - *Unstructured vs Structured*

### Paso 3: Actividad Interactiva (10 mins)
1. Abre el archivo `Actividad_EMI_Semana2.html` y proyéctalo en la pantalla.
2. **Instrucciones:** "Tomen una hoja y un lápiz. Voy a mostrarles un texto con espacios en blanco basado en el video. Tienen 5 minutos para escribir en su hoja las palabras correctas que completan cada frase."
3. Al finalizar, elige a diferentes estudiantes para que dicten las respuestas y ve llenando los espacios en el HTML interactivo (que se autocalificará en verde/rojo para que toda la clase vea los resultados).

---

## 🐍 Teoría: Ecosistema Python (45 Minutos)

Utiliza la presentación `Presentacion_Clase2_Interactiva.html` para apoyar esta sección.

**Puntos Clave a Explicar:**
1. **¿Qué es Python?** Lenguaje de alto nivel, interpretado, multiparadigma, con una sintaxis limpia. Es el estándar en Ciencia de Datos.
2. **Librerías Core:** Mencionar brevemente Pandas (análisis tabular) y NumPy (cálculo matricial).
3. **¿Por qué Google Colab?** 
   - No requiere instalación (Zero setup).
   - Acceso gratuito a GPUs.
   - Fácil de compartir y trabajar de forma colaborativa.
   - Guarda los archivos directamente en Google Drive.
4. **Programación en Parejas (Pair Programming):** Explicar la dinámica. Un estudiante será el "Piloto" (quien escribe el código) y el otro el "Copiloto" (quien guía y revisa). Cambiarán roles a la mitad del ejercicio.

---

## 💻 Práctica Guiada: Generación y Análisis de Datos (Colab)

**Archivo a utilizar:** `Colab_Guiado_Semana2.ipynb` (Los estudiantes lo pueden descargar o abrir en Colab).

### El Problema Real
Vamos a simular ser analistas de datos para una tienda local. No tenemos los datos históricos, así que vamos a **generar datos sintéticos** usando Python nativo y luego usaremos **Pandas** para guardarlos, leerlos y analizarlos.

### Paso a paso en Colab:
1. **Abrir Colab:** Que todos ingresen a [colab.research.google.com](https://colab.research.google.com) y creen un nuevo cuaderno.
2. **Generación de Datos (Piloto A):**
   - Importar `random` y `datetime`.
   - Crear listas de productos, cantidades y precios usando comprensiones de listas o bucles.
3. **Uso de Pandas y Almacenamiento (Piloto B - Cambio de roles):**
   - Importar `pandas as pd`.
   - Convertir las listas generadas a un DataFrame (`pd.DataFrame`).
   - Guardar los datos sintéticos en un archivo local temporal en Colab (`df.to_csv('ventas_sinteticas.csv', index=False)`).
4. **Lectura y Análisis:**
   - Leer el archivo CSV recién guardado.
   - Utilizar `.head()`, `.describe()`, y agrupar para encontrar el producto más vendido y el ingreso total.

### Cierre de la Clase
- Enseñar a los estudiantes cómo descargar el archivo `.ipynb` de Colab.
- **Push a GitHub:** Instruir para que suban ese archivo a su portafolio en GitHub como evidencia de su primer acercamiento práctico.
