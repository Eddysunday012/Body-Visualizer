import xml.etree.ElementTree as ET
import json

def read_txt_as_xml(txt_file_path):
    """
    Reads a TXT file as an XML structure.

    Args:
        txt_file_path (str): The path to the TXT file.

    Returns:
        xml.etree.ElementTree.Element: The root element of the parsed XML structure.
    """

    try:
        with open(txt_file_path, 'r') as f:
            txt_content = f.read()
            txt_content = txt_content[0: len(txt_content) - 1]

        # Check if the TXT content has XML-like structure
            if txt_content.startswith('<') and txt_content.endswith('>'):
                try:
                    root = ET.fromstring(txt_content)
                    return root
                except ET.ParseError as e:
                    print(f"Error parsing XML: {e}")
                    return None
            else:
                print("The TXT file does not have a valid XML structure.")
                return None
    except FileNotFoundError:
        print(f"File not found: {txt_file_path}")
        return None

# Example usage
txt_file_path = "humanBody.txt"
root = read_txt_as_xml(txt_file_path)

if root:
    # Process the XML structure
    mainVals = []
    for child in root: 
        if child.tag == 'g':
            val = {'bodyName': child.attrib["id"], 'polygons': []}
            if 'className' in child.attrib.keys():
                val['className']=child.attrib['className']
            for c in child:
                polygonAttr = {'id': c.attrib['id'], 'points': c.attrib['points']}
                if 'transform' in c.attrib.keys():
                    polygonAttr['transform']= c.attrib['transform']
                val['polygons'].append(polygonAttr)
            mainVals.append(val)
    with open("humanBody.json", "w") as f:
        json.dump(mainVals, f)
else:
    print("Failed to read or parse the TXT file.")
