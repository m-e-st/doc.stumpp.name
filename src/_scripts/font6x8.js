/***
 *	font6x8.js 
 *
 *	Copyright 2023 Michael Stumpp <mstumpp@hwn.de>
 *
 */

/*** JQUERY initialization on document ready ***/
/*
$(document).ready(function(){

  // jQuery methods go here...

}); 
*/

const codeTable = [
/* 0x00 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x01 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x02 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x03 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x04 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x05 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x06 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x07 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x08 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x09 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0A */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0B */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0C */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0D */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0E */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x0F */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0x10 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x11 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x12 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x13 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x14 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x15 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x16 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x17 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x18 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x19 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1A */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1B */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1C */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1D */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1E */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x1F */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0x20 */ [ 0,0,0,0, 0,0,0,0 ], // space
/* 0x21 */ [ 0x0c,0x0c,0x0c,0x0c, 0x0c,0,0x0c,0x0c ], // !
/* 0x22 */ [ 0x12,0x12,0,0, 0,0,0,0 ], // "
/* 0x23 */ [ 0,0x12,0x3f,0x12, 0x12,0x3f,0x12,0 ], // #
/* 0x24 */ [ 0x1e,0x2d,0x2c,0x3e, 0x1f,0x0d,0x2d,0x1e ], // $
/* 0x25 */ [ 0x33,0x36,0x06,0x0c, 0x0c,0x18,0x1b,0x33 ], // %
/* 0x26 */ [ 0x18,0x24,0x24,0x18, 0x25,0x26,0x26,0x29 ], // &
/* 0x27 */ [ 0x08,0x08,0,0, 0,0,0,0 ], // '
/* 0x28 */ [ 0x06,0x0c,0x18,0x18, 0x18,0x18,0x0c,0x06 ], // (
/* 0x29 */ [ 0x18,0x0c,0x06,0x06, 0x06,0x06,0x0c,0x18 ], // )
/* 0x2A */ [ 0,0x2a,0x1c,0x3e, 0x1c,0x2a,0,0 ], // *
/* 0x2B */ [ 0,0x0c,0x0c,0x3f, 0x3f,0x0c,0x0c,0 ], // +
/* 0x2C */ [ 0,0,0,0, 0,0x0c,0x0c,0x18 ], // ,
/* 0x2D */ [ 0,0,0,0x3f, 0x3f,0,0,0 ], // -
/* 0x2E */ [ 0,0,0,0, 0,0x0c,0x0c,0 ], // .
/* 0x2F */ [ 0x03,0x06,0x06,0x0c, 0x0c,0x18,0x18,0x30 ], // /

/* 0x30 */ [ 0x1e,0x3f,0x33,0x33, 0x33,0x33,0x3f,0x1e ], // 0
/* 0x31 */ [ 0x1c,0x1c,0x0c,0x0c, 0x0c,0x0c,0x1e,0x1e ], // 1
/* 0x32 */ [ 0x1e,0x3f,0x33,0x07, 0x0e,0x1c,0x3f,0x3f ], // 2
/* 0x33 */ [ 0x1e,0x1f,0x03,0x0f, 0x0f,0x03,0x1f,0x1e ], // 3
/* 0x34 */ [ 0x07,0x0f,0x1b,0x33, 0x3f,0x03,0x03,0x03 ], // 4
/* 0x35 */ [ 0x1f,0x1f,0x18,0x1e, 0x03,0x03,0x1f,0x1e ], // 5
/* 0x36 */ [ 0x1e,0x3f,0x30,0x3e, 0x33,0x33,0x3f,0x1e ], // 6
/* 0x37 */ [ 0x1f,0x1f,0x03,0x07, 0x06,0x0e,0x0c,0x0c ], // 7
/* 0x38 */ [ 0x1e,0x3f,0x33,0x1e, 0x33,0x33,0x3f,0x1e ], // 8
/* 0x39 */ [ 0x1e,0x3f,0x33,0x33, 0x1f,0x03,0x3f,0x1e ], // 9
/* 0x3A */ [ 0,0x0c,0x0c,0, 0,0x0c,0x0c,0 ], // :
/* 0x3B */ [ 0,0x0c,0x0c,0, 0,0x0c,0x0c,0x18 ], // ;
/* 0x3C */ [ 0,0,0x06,0x0c, 0x18,0x0c,0x06,0 ], // <
/* 0x3D */ [ 0,0,0x1e,0x1e, 0,0x1e,0x1e,0 ], // =
/* 0x3E */ [ 0,0,0x18,0x0c, 0x06,0x0c,0x18,0 ], // >
/* 0x3F */ [ 0x1e,0x3f,0x33,0x03, 0x0e,0x0c,0,0x0c ], // ?

/* 0x40 */ [ 0x1e,0x21,0x2d,0x33, 0x33,0x2e,0x21,0x1e ], // @
/* 0x41 */ [ 0x0c,0x1e,0x3f,0x33, 0x3f,0x3f,0x33,0x33 ], // A
/* 0x42 */ [ 0x3e,0x3f,0x33,0x3e, 0x3e,0x33,0x3f,0x3e ], // B
/* 0x43 */ [ 0x1e,0x3f,0x33,0x30, 0x30,0x33,0x3f,0x1e ], // C
/* 0x44 */ [ 0x3c,0x3e,0x36,0x36, 0x36,0x36,0x3e,0x3c ], // D
/* 0x45 */ [ 0x3e,0x3e,0x30,0x3c, 0x3c,0x30,0x3e,0x3e ], // E
/* 0x46 */ [ 0x3e,0x3e,0x30,0x3c, 0x3c,0x30,0x30,0x30 ], // F
/* 0x47 */ [ 0x1e,0x3f,0x33,0x30, 0x37,0x33,0x3f,0x1e ], // G
/* 0x48 */ [ 0x33,0x33,0x33,0x3f, 0x3f,0x33,0x33,0x33 ], // H
/* 0x49 */ [ 0x1e,0x1e,0x0c,0x0c, 0x0c,0x0c,0x1e,0x1e ], // I
/* 0x4A */ [ 0x06,0x06,0x06,0x06, 0x06,0x36,0x3e,0x1c ], // J
/* 0x4B */ [ 0x33,0x33,0x36,0x3c, 0x3c,0x36,0x33,0x33 ], // K
/* 0x4C */ [ 0x30,0x30,0x30,0x30, 0x30,0x30,0x3e,0x3e ], // L
/* 0x4D */ [ 0x21,0x33,0x3f,0x3f, 0x33,0x33,0x33,0x33 ], // M
/* 0x4E */ [ 0x33,0x33,0x3b,0x3f, 0x3f,0x37,0x33,0x33 ], // N
/* 0x4F */ [ 0x1e,0x3f,0x33,0x33, 0x33,0x33,0x3f,0x1e ], // O

/* 0x50 */ [ 0x3e,0x3f,0x33,0x3f, 0x3e,0x30,0x30,0x30 ], // P
/* 0x51 */ [ 0x1e,0x3f,0x33,0x33, 0x33,0x36,0x3f,0x1d ], // Q
/* 0x52 */ [ 0x3e,0x3f,0x33,0x3f, 0x3e,0x36,0x33,0x33 ], // R
/* 0x53 */ [ 0x1f,0x3f,0x30,0x3e, 0x1f,0x03,0x3f,0x3e ], // S
/* 0x54 */ [ 0x3f,0x3f,0x0c,0x0c, 0x0c,0x0c,0x0c,0x0c ], // T
/* 0x55 */ [ 0x33,0x33,0x33,0x33, 0x33,0x33,0x3f,0x1e ], // U
/* 0x56 */ [ 0x33,0x33,0x33,0x33, 0x33,0x33,0x1e,0x0c ], // V
/* 0x57 */ [ 0x21,0x21,0x21,0x21, 0x2d,0x2d,0x3f,0x1e ], // W
/* 0x58 */ [ 0x33,0x33,0x1e,0x0c, 0x0c,0x1e,0x33,0x33 ], // X
/* 0x59 */ [ 0x33,0x33,0x1e,0x1e, 0x0c,0x0c,0x0c,0x0c ], // Y
/* 0x5A */ [ 0x3f,0x3f,0x07,0x0e, 0x1c,0x38,0x3f,0x3f ], // Z
/* 0x5B */ [ 0x0C,0x08,0x08,0x08, 0x08,0x08,0x08,0x0C ], // [
/* 0x5C */ [ 0x30,0x18,0x18,0x0c, 0x0c,0x06,0x06,0x03 ], // \ 
/* 0x5D */ [ 0x0C,0x04,0x04,0x04, 0x04,0x04,0x04,0x0C ], // ]
/* 0x5E */ [ 0x08,0x14,0,0, 0,0,0,0 ], // ^
/* 0x5F */ [ 0,0,0,0, 0,0,0x3f,0x3f ], // _

/* 0x60 */ [ 0,0,0,0, 0,0,0,0 ], // `
/* 0x61 */ [ 0,0,0,0, 0,0,0,0 ], // a
/* 0x62 */ [ 0,0,0,0, 0,0,0,0 ], // b
/* 0x63 */ [ 0,0,0,0, 0,0,0,0 ], // c
/* 0x64 */ [ 0,0,0,0, 0,0,0,0 ], // d
/* 0x65 */ [ 0,0,0,0, 0,0,0,0 ], // e
/* 0x66 */ [ 0,0,0,0, 0,0,0,0 ], // f
/* 0x67 */ [ 0,0,0,0, 0,0,0,0 ], // g
/* 0x68 */ [ 0,0,0,0, 0,0,0,0 ], // h
/* 0x69 */ [ 0,0,0,0, 0,0,0,0 ], // i
/* 0x6A */ [ 0,0,0,0, 0,0,0,0 ], // j
/* 0x6B */ [ 0,0,0,0, 0,0,0,0 ], // k
/* 0x6C */ [ 0,0,0,0, 0,0,0,0 ], // l
/* 0x6D */ [ 0,0,0,0, 0,0,0,0 ], // m
/* 0x6E */ [ 0,0,0,0, 0,0,0,0 ], // n
/* 0x6F */ [ 0,0,0,0, 0,0,0,0 ], // o

/* 0x70 */ [ 0,0,0,0, 0,0,0,0 ], // p
/* 0x71 */ [ 0,0,0,0, 0,0,0,0 ], // q
/* 0x72 */ [ 0,0,0,0, 0,0,0,0 ], // r
/* 0x73 */ [ 0,0,0,0, 0,0,0,0 ], // s
/* 0x74 */ [ 0,0,0,0, 0,0,0,0 ], // t
/* 0x75 */ [ 0,0,0,0, 0,0,0,0 ], // u
/* 0x76 */ [ 0,0,0,0, 0,0,0,0 ], // v
/* 0x77 */ [ 0,0,0,0, 0,0,0,0 ], // w
/* 0x78 */ [ 0,0,0,0, 0,0,0,0 ], // x
/* 0x79 */ [ 0,0,0,0, 0,0,0,0 ], // y
/* 0x7A */ [ 0,0,0,0, 0,0,0,0 ], // z
/* 0x7B */ [ 0,0,0,0, 0,0,0,0 ], // {
/* 0x7C */ [ 0x0c,0x0c,0x0c,0x0c, 0x0c,0x0c,0x0c,0x0c ], // |
/* 0x7D */ [ 0,0,0,0, 0,0,0,0 ], // }
/* 0x7E */ [ 0,0,0,0, 0,0,0,0 ], // ~
/* 0x7F */ [ 0,0,0,0, 0,0,0,0 ], // DEL

/* 0x80 */ [ 0x33,0x33,0,0, 0,0,0,0 ], // €
/* 0x81 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x82 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x83 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x84 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x85 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x86 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x87 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x88 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x89 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8A */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8B */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8C */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8D */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8E */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x8F */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0x90 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x91 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x92 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x93 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x94 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x95 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x96 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x97 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x98 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x99 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9A */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9B */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9C */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9D */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9E */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0x9F */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0xA0 */ [ 0,0,0,0, 0,0,0,0 ], // hard space
/* 0xA1 */ [ 0x0c,0x0c,0,0x0c, 0x0c,0x0c,0x0c,0x0c ], // ¡
/* 0xA2 */ [ 0,0,0,0, 0,0,0,0 ], // ¢
/* 0xA3 */ [ 0,0,0,0, 0,0,0,0 ], // £
/* 0xA4 */ [ 0,0,0,0, 0,0,0,0 ], // ¤
/* 0xA5 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xA6 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xA7 */ [ 0,0,0,0, 0,0,0,0 ], // §
/* 0xA8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xA9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAC */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAD */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAE */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xAF */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0xB0 */ [ 0,0x0c,0x0c,0, 0,0,0,0 ], // °
/* 0xB1 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB2 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB3 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB4 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB5 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB6 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB7 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xB9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBC */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBD */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBE */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xBF */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0xC0 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC1 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC2 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC3 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC4 */ [ 0x21,0x0c,0x1e,0x33, 0x3f,0x3f,0x33,0x33 ], // Ä
/* 0xC5 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC6 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC7 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xC9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCC */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCD */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCE */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xCF */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0xD0 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD1 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD2 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD3 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD4 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD5 */ [ 0,0,0,0, 0,0,0,0 ], // Õ
/* 0xD6 */ [ 0x21,0x1e,0x3f,0x33, 0x33,0x33,0x3f,0x1e ], // Ö
/* 0xD7 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xD9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xDA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xDB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xDC */ [ 0x33,0x00,0x33,0x33, 0x33,0x33,0x3f,0x1e ], // Ü
/* 0xDD */ [ 0,0,0,0, 0,0,0,0 ], // Ý
/* 0xDE */ [ 0,0,0,0, 0,0,0,0 ], // Þ
/* 0xDF */ [ 0x1c,0x3e,0x36,0x3c, 0x3e,0x36,0x36,0x34 ], // ß

/* 0xE0 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE1 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE2 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE3 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE4 */ [ 0x21,0x0c,0x1e,0x33, 0x3f,0x3f,0x33,0x33  ], // ä
/* 0xE5 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE6 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE7 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xE9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xEA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xEB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xEC */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xED */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xEE */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xEF */ [ 0,0,0,0, 0,0,0,0 ], // 

/* 0xF0 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF1 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF2 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF3 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF4 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF5 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF6 */ [ 0x21,0x1e,0x3f,0x33, 0x33,0x33,0x3f,0x1e ], // ö
/* 0xF7 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF8 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xF9 */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xFA */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xFB */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xFC */ [ 0x33,0x00,0x33,0x33, 0x33,0x33,0x3f,0x1e ], // ü
/* 0xFD */ [ 0,0,0,0, 0,0,0,0 ], // 
/* 0xFE */ [ 0,0,0,0, 0,0,0,0 ], // þ
/* 0xFF */ [ 0,0,0,0, 0,0,0,0 ]  // ÿ

];

let i, k;		/*copy uppercase to lowercase */
for (i = 0x41; i < 0x5b; i++) {
	for (k = 0; k < 8; k++) {
		codeTable[i+0x20][k] = codeTable[i][k];
	}
}

function getCode_6x8(character) {
	return codeTable[character.charCodeAt(0)];
}

function getCodeRow_6x8(character, row) {
	return codeTable[character.charCodeAt(0)][row];
}

function getCodeBit_6x8(character, row, col) {
	const code = codeTable[character.charCodeAt(0)][row];
	const mask = 0x20 >>> col;
	return code & mask;
}

