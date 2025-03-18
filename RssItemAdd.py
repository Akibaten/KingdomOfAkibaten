import xml.etree.ElementTree as ET
import time
import subprocess

#get xml file
tree = ET.parse('feed.xml')
root = tree.getroot()

channel_element = root.find('channel')
if channel_element is None:
	raise ValueError("you messed up something lol in <channel>")

item_element = ET.Element('item')

pubDate = ET.SubElement(item_element, 'pubDate')
timestamp = time.time()
pubDate.text = time.ctime(timestamp)

title = ET.SubElement(item_element, 'title')
title.text = input("Title of new update:")

description = ET.SubElement(item_element, 'description')
description.text = input('Some description of my new item:')

link = ET.SubElement(item_element, 'link')
link.text = "https://kingdomofakibaten.neocities.org/" + input("page changed including extension(case sensitive):")

# 5. Append the new <item> element to <channel>
channel_element.insert(0, item_element)

ET.indent(tree, '  ')

# 6. Write the updated XML back to file
tree.write('feed.xml', encoding='utf-8', xml_declaration=True)

print("Success!!!")

time.sleep(.5)