# Taller Práctico - Semana 6: Correlación de Pearson y Regresión Lineal Simple

**Módulo:** Análisis Bivariado y Modelado Predictivo
**Nivel:** Maestría en Ciencia de Datos e Inteligencia Artificial
**Metodología:** Aprendizaje Basado en Problemas (ABPr)

---

## 1. Marco Teórico y Formulación Matemática

El análisis paramétrico bivariado permite cuantificar la relación estructural entre dos variables continuas. Este taller se centra en la aplicación de dos herramientas fundamentales:

**1. Coeficiente de Correlación de Pearson ($r$):**
Mide la fuerza y dirección de la relación lineal estandarizada.
$$ r_{XY} = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2 \sum_{i=1}^{n} (y_i - \bar{y})^2}} $$

**2. Regresión Lineal Simple (Mínimos Cuadrados Ordinarios - OLS):**
Estima el vector de respuesta teórica minimizando la Suma de Errores Cuadráticos.
$$ \hat{y} = \beta_0 + \beta_1 x $$
Donde la pendiente ($\beta_1$) y el intercepto ($\beta_0$) se definen como:
$$ \beta_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2} \quad ; \quad \beta_0 = \bar{y} - \beta_1 \bar{x} $$

---

## 2. Descripción de la Situación Problema

Una firma de inversión inmobiliaria requiere calibrar un modelo predictivo para la tasación de bienes raíces en un sector urbano de alta demanda. Se ha extraído una muestra aleatoria robusta de 20 propiedades registradas en el último trimestre.

Se evaluará el Área Construida en metros cuadrados (Variable Independiente $X$) versus el Precio de Transacción en millones de pesos (Variable Dependiente $Y$).

### Dataset Estructural (Muestra N=20)

| ID | Área Construida ($X$) [$m^2$] | Precio Transacción ($Y$) [Millones $] |
|:--:|:-----------------------------:|:-------------------------------------:|
| 1  | 45.5                          | 210.0                                 |
| 2  | 50.0                          | 235.5                                 |
| 3  | 55.2                          | 240.0                                 |
| 4  | 60.0                          | 280.0                                 |
| 5  | 62.5                          | 295.0                                 |
| 6  | 65.0                          | 310.5                                 |
| 7  | 68.0                          | 315.0                                 |
| 8  | 70.5                          | 340.0                                 |
| 9  | 72.0                          | 355.5                                 |
| 10 | 75.0                          | 360.0                                 |
| 11 | 80.0                          | 385.0                                 |
| 12 | 82.5                          | 400.0                                 |
| 13 | 85.0                          | 410.5                                 |
| 14 | 88.0                          | 420.0                                 |
| 15 | 90.0                          | 435.0                                 |
| 16 | 95.5                          | 460.0                                 |
| 17 | 100.0                         | 480.0                                 |
| 18 | 105.0                         | 495.5                                 |
| 19 | 110.0                         | 510.0                                 |
| 20 | 120.0                         | 560.0                                 |

*(Nota Metodológica: Los datos han sido preprocesados para asegurar normalidad y carencia de multicolinealidad, listos para estimación OLS).*

---

## 3. Retos de Práctica Autónoma

Para garantizar la apropiación del conocimiento, el estudiante deberá resolver las siguientes consignas. Se exige el uso de un entorno Python (Jupyter Notebook / Google Colab) utilizando bibliotecas estándar (`pandas`, `numpy`, `scikit-learn`). Todo resultado debe acompañarse de una interpretación técnica rigurosa.

### Nivel 1: Exploración y Cuantificación Lineal (Aplicar)

1. **Vectores y Geometría:** Importe el dataset a un `DataFrame` de Pandas y genere un diagrama de dispersión (Scatter Plot). ¿Es visualmente plausible asumir una relación lineal entre el Área Construida y el Precio?
2. **Matriz de Covarianza:** Calcule la matriz de varianza-covarianza. Explique la limitación de la covarianza para determinar la fuerza de la relación.
3. **Coeficiente de Pearson:** Calcule el estadístico $r$ de Pearson. Clasifique la fuerza de la relación según la escala teórica formal.

### Nivel 2: Inferencia Paramétrica OLS (Analizar)

4. **Estimación de Parámetros:** Ajuste un modelo de Regresión Lineal Simple. Obtenga matemáticamente el intercepto ($\beta_0$) y la pendiente ($\beta_1$).
5. **Interpretación de Coeficientes:** 
   - Redacte la interpretación económica del parámetro $\beta_1$ (¿Cuánto incrementa el precio por cada metro cuadrado adicional?).
   - Analice el valor de $\beta_0$. ¿Tiene sentido lógico en este contexto inmobiliario que exista un precio base si el área fuera cero? Justifique estadísticamente.
6. **Diagnóstico del Modelo:** Calcule el Coeficiente de Determinación ($R^2$). Explique exactamente qué porcentaje de la varianza del Precio de Transacción es explicada por el Área Construida.

### Nivel 3: Predicción y Diagnóstico de Robustez (Evaluar)

7. **Predicción Intrapolada:** La firma inmobiliaria desea tasar un apartamento de $87.5 \, m^2$. Utilice la ecuación paramétrica obtenida para estimar el precio teórico.
8. **Análisis de Residuos:** Calcule el residuo ($e_i$) para la propiedad ID 10 ($75.0 \, m^2$, Precio real: $360.0$ Millones). ¿El modelo sobrestimó o subestimó el valor de esta propiedad en el mercado real? Calcule el porcentaje absoluto de error.
9. **Riesgo de Extrapolación:** Se solicita predecir el precio para una mansión de $450 \, m^2$. Argumente rigurosamente por qué utilizar este modelo lineal simple para dicha predicción constituye una falacia metodológica (riesgo de extrapolación fuera del dominio de calibración).

---

## 4. Referencias y Bibliografía

- James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). *An Introduction to Statistical Learning*. Springer.
- Montgomery, D. C., Peck, E. A., & Vining, G. G. (2012). *Introduction to Linear Regression Analysis*. John Wiley & Sons.
