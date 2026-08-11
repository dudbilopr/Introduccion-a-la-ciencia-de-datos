import docx
from docx.shared import Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

def replace_text_in_paragraph(paragraph, old_text, new_text):
    if old_text in paragraph.text:
        # A simple replacement that might lose run-level formatting
        # but is safer for plain text
        paragraph.text = paragraph.text.replace(old_text, new_text)

def build_guide(template_path, output_path):
    doc = docx.Document(template_path)
    
    # 1. Fill basic info
    for p in doc.paragraphs:
        if "Profesor (a):" in p.text:
            p.text = p.text.replace("Profesor (a):", "Profesor (a): Dudbil Olvasada Pabon Riaño")
        elif "Facultad:" in p.text:
            p.text = p.text.replace("Facultad:", "Facultad: Ingeniería (o afín)")
        elif "Programa:" in p.text:
            p.text = p.text.replace("Programa:", "Programa: Ingeniería de Sistemas / Ciencia de Datos")
        elif "1. ¿De qué trata este curso y por qué es importante?" in p.text:
            pass
            
    # Tables modification
    # Table 0: Course Info (Nombre, Periodo, etc.)
    # The first table seems to be the one at the end of the template (or in the header?)
    # Wait, let's look at template tables.
    
    doc.save(output_path)

if __name__ == '__main__':
    print("Script created")
