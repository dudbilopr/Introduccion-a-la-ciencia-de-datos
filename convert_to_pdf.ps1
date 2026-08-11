$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

$doc = $word.Documents.Open("c:\Users\dudbi\Downloads\Introduccion a la Ciencia de Datos\Guia_de_Aprendizaje_Final.docx")
$doc.SaveAs([ref]"c:\Users\dudbi\Downloads\Introduccion a la Ciencia de Datos\Guia_de_Aprendizaje_Final.pdf", [ref]17)
$doc.Close()
$word.Quit()
