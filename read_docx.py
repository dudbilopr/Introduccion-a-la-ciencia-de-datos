import zipfile, xml.etree.ElementTree as ET
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def read_docx(path):
    try:
        z = zipfile.ZipFile(path)
        xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        # Using a simple namespace handling for docx
        text = []
        for node in tree.iter():
            if node.tag.endswith('}t') and node.text:
                text.append(node.text)
        return '\n'.join(text)
    except Exception as e:
        return str(e)

print('=== Introducción ===')
print(read_docx('Introducción a la Ciencia de datos.docx'))
print('\n=== Syllabus ===')
print(read_docx('Sylabus INTRODUCCIÓN A LA CIENCIA DE DATOS.docx'))
print('\n=== Guia ===')
print(read_docx('Guia-de-Aprendizaje_UNAB1.docx'))
