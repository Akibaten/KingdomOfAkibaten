<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<head>
  <style> 
    h1 {
      font-size: 2.5em;
      text-align: center;
      color:rgb(235,0,127);
      margin-top: .05em;
      margin-bottom: .01em;
    }
    h2 {
      line-height: 115%;
      font-size: 1.875em;
      color:rgb(235,0,127);
      margin-top: .01em;
      margin-bottom: .1em;
    }

    p {color:hotpink};    
  </style>
</head>
<body>
  <xsl:for-each select="rss/channel/item">
    <div style = "background-color: white">
    <h2 style = "margin: 0; font-size: 20px"><xsl:value-of select="title"/></h2>
    <p style = "font-size: 15px"><xsl:value-of select="pubDate"/></p>
    <p style = "font-size: 15px; white-space: pre-wrap; word-wrap: break-word;"><xsl:value-of select="description"/></p>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>