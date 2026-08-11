import os
import sys

def convert_to_pdf(docx_path, pdf_path):
    try:
        import win32com.client
    except ImportError:
        print("win32com is not installed.")
        sys.exit(1)
        
    try:
        word = win32com.client.Dispatch('Word.Application')
        doc = word.Documents.Open(os.path.abspath(docx_path))
        doc.SaveAs(os.path.abspath(pdf_path), FileFormat=17)
        doc.Close()
        word.Quit()
        print("Conversion successful")
    except Exception as e:
        print(f"Error during conversion: {e}")

if __name__ == '__main__':
    convert_to_pdf('Guia_de_Aprendizaje_Final.docx', 'Guia_de_Aprendizaje_Final.pdf')
