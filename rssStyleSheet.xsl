<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<head>
  <link rel="stylesheet" type="text/css" href="index/style.css"/>
  <style type="text/css">
  </style>
</head>
<body>
  <xsl:for-each select="rss/channel/item">
    <div style = "background-color: white">
    <h2 style = "margin: 0font-size: 20px"><xsl:value-of select="title"/></h2>
    <p style = "font-size: 15px"><xsl:value-of select="pubDate"/></p>
    <p style = "font-size: 15px; white-space: pre-wrap; word-wrap: break-word;"><xsl:value-of select="description"/></p>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>