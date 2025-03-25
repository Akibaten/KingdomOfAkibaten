<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<head>
  <link rel="stylesheet" type="text/css" href="index/style.css"/>
  <style type="text/css">
    .formattedText{
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  </style>
</head>
<body>
    <div class = "formattedText">
      <xsl:for-each select="rss/channel/item">
        <h2 style = "fon-size: 20px"><xsl:value-of select="title"/></h2>
        <p style = "font-size: 15px"><xsl:value-of select="pubDate"/></p>
        <p style = "font-size: 15px"><xsl:value-of select="description"/></p>
      </xsl:for-each>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>