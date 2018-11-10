# 20181028_gen_qrcode

generate QR code graphics using api of qoqr.me.

## sample page
- [generate QR code](https://sgtao.github.io/20181028_gen_qrcode/)

## memo
- refer to dotinstall's lesson [二次元バーコードジェネレーター](https://dotinstall.com/lessons/barcode_jquery_v2)

- using API create-qr-code of [QR code API](http://goqr.me/api/doc)
  + 1.0 General notes
    + 1.1 Terms of Service
  + 2.0 Quick start guide  
    write in HTML as below:
    
    '''<img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" />'''
    
  + 3.0 Parameters
    + 3.1 data parameter (mandatory)
      The text to store within the QR code (URL encoded, PHP programmers may use urlencode()).
      - charcount : Min>=1, Max<=900
      - ex) '''data="hogehoge"'''
    + 3.2 size parameter (optional)
      - Format:[integer]x[integer]
      - size limit : Min >= 10x10 , Max <= 1000x1000
      - ex) '''size=150x150'''
    + 3.3 charset-source parameter (optional)
      - Specifies the charset of the text submitted via data parameter.(UTF-8, ISO-8859-1)
      - ex) '''charset-source=UTF-8'''
    + 3.4 charset-target parameter (optional)
      - similar charset-source parameter.
    + 3.5 ecc parameter (optional)
      - Defines the ECC which determines the degree of data redundancy.
      - level :  L/M/Q/H (Default = L )
    + 3.6 color parameter (optional)
      - Specifies color of the data modules as RGB value.
      - ex) '''color=255-0-0''' (red)
      - ex) '''color=FF0000''' (red)
      - ex) '''color=f00''' (red)
      - ex) '''color=0f0''' (green)
      - ex) '''color=00f''' (blue)
    + 3.7 bgcolor parameter (optional)
      - Color of the background as RGB value.
      - ex) '''bgcolor=00f''' (blue)
    + 3.8 margin parameter (optional)
      - Thickness of a margin in pixels. T
      - limit : min = 0, max = 50
      - ex) '''margin=30'''
    + 3.9 qzone parameter (optional)
      - Thickness of a margin .
      - limit : min = 0, max = 100
    + 3.10 format parameter (optional)  
      - Specifies the format of QR code picture.
      - available value are png, gif, jpeg, jpg, svg and eps (default as png)
      - ex) '''format=jpeg'''



