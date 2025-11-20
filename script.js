// script.js

// 50 jobs array — image field left empty (put your URLs there)
const quizzes = [
    {answer:"accountant", korean:"회계사", roman:"hoegyesa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHlktH-DWOH2svd9ZqCjmYSET6cy8kXyaqFZhMXlJT3VSU76bQhtw_S0KIp-rJqIToH2rS_uC-7wuJCJHZrjFvdQYHZTGPqqbXiZbbp6QovPBPu1B3FKw1XFkK4JUoGr2jCapzjoZDs2gdLGDrDoV3Pr_qDqJEq0nBWqhdfpJ_kvxCtVGoNrE_OTrr86M/s940/vibe%20%283%29.jpg"},
    {answer:"banker", korean:"은행원", roman:"eunhaengwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhFXD47OCOG2p4Z9sxTIB66hqqf8SZ637enpXa-2IB47Ge9V74N6lI_gTRjYX0K-sRsVsdPpmPSR0eY2pQR50qWSYnz4nf7CdCibdJ6NlW5tMUwWE7EJFrxiWM1dYlshlufLbdNQiEYX2Zcs4cXvU3prN9E4C13nv-kvZun_bUU5DElhos70jLPnZL_NQ/s940/vibe%20%283%2900.jpg"},
    {answer:"doctor", korean:"의사", roman:"uisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_VnRL-oSkl6hmZrmM8l2RHNCYU_dqH3nBl9r8kn2So0WLNslFeW_oXuDsPwVMmNUPpUh36afcAnwyZ-1ay6voej5zasTeH9kcbaE64an7UKJ8sE10Qildt6fzTvL9jSD4EXMELTROGQvE_us2Jiw0wQz-n75n8VswpT2fpwGCboxkP6h3kvoiLVuOWv0/s940/vibe%20%283%29.jpg"},
    {answer:"teacher", korean:"교사", roman:"gyosa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx6BadSnhN5fZX6lsWvbPdYobpNbtxbkz4jP1P17JbyaMhZYdhELKuz0JMLFkw2QmmJ6DCWGzQWmVV335QVTawPo3LM5dUQfNLtGVqh0pDpq5K41uePv1rJQsN1Wu63oU5RYJVYRkZ26uIVGAyTitQlLJZCn4XzRr5halHWaH-ee1YSgpYHZr_ygtVct0/s940/vibe%20%283%2911.jpg"},
    {answer:"engineer", korean:"기술자", roman:"gisulja", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ3r8g1fRh_UA2cSLQVy8eAemivqLsX3iW8c-5f8nJQpfG2NkFHjQqnTKF3lf8NgzGBiwgKYNMmHzsGpWU6wmSDKUetkoimkmgSYjoF6YYFNVL4IfTEFFzvDccwmLbwEwzt56qh70rc3WVsERGS_LSE7kTxZbdbj3sjpDC9txWcV0PBdXd5gpoumhOU7A/s940/vibe%20%283%2911.jpg"},
    {answer:"driver", korean:"운전기사", roman:"unjeongisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRPeMJ6U95q9RSYZ69ItnpZqpYgH-IsD1LDmiCm4XWwu6RMp8Orsqfp7teZrwdmwUt8p-oZsVXISu74TPgCLpfBVYRrVL_F2R7KIZn_2RnhuQcVdwop6iO0i0PBcU55cogWo4qLSqXG-nM0k-Ukwnu3Y1VJGqmjo-1AWd71G0ybxFgALDfYZw7ND1wzjY/s940/vibe%20%283%2922.jpg"},
    {answer:"construction worker", korean:"건설 노동자", roman:"geonseol nodongja", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHcmLVRTOLwlFFUYjG1mJ8PGEV0BJnvLXk2HuVgunnd8CD070Src4vDRvfun6oiQYbV4Jyyu79KrcBQeNenEbQ_IgliqKGfz7ipK1u2mt3JImhiUrHNLyeFiZcyzz3SlBD6BfV-0T0UPT K Z X T 4 2 l o a U - G U E P j o v K v 1 Z A b 8 i F u e v h y p h e n h y p h e n P v V Y i r 1 c t z 4 S d 4 w/s940/vibe%20%283%2922.jpg"},
    {answer:"laborer", korean:"노동자", roman:"nodongja", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiytNyjnjvP9s_2gZxo_uIUGM97NXCa8j3ofgtYZWKOEKk1D6OhfuwKTiQgdKDFn6m0nPA4LQce7It9JK8clWomq5Lr5QnjsW6nwbUByXX2T0CvOxTw7k54vEQ6zTBaQneUHOc1ZMkZ9-oGGe4_k7VfitIj9oZfOupMCdp_6wMyUlWJSCoAf-S4pamo8OY/s940/vibe%20%284%2999.jpg"},
    {answer:"farmer", korean:"농부", roman:"nongbu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1qDDPtZ8qM8vtkD3mzCIrQ0wGB3yfNGaBl7IGEE9dcUedTvvB7x5OV9PHaL59wPFJ5Nhx-MawItMmXO_Sv4LORfhUgajpzdKL_4zj6E5LqigEm2_faN2g0wwRXD4aSC9C-Ma-2w0u7Pk-ZQEqO8xY7QQitn05Oh5aIJLk-HdgdEGnfJ6o7BRRnhiLMGU/s940/vibe%20%283%2977.jpg"},
    {answer:"fisherman", korean:"어부", roman:"eobu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-La6raYo-yAm9kd686g-_EpsqoPKTCjjRZ2MAn8gBlDec2BkXcogkGN9Q6qLI5CSTVozvvo1JdZ7l38FpnW66y-lB76KEFRuTebkQdNeEFrbbbKGwLK8GlE-nyERXuFHUjl51jHvCdW6tXGiNH6qFC741U1eawEh5Ke1ENuel4zR9Y1c93BNXTitz0E/s940/vibe%20%283%2933.jpg"},
    {answer:"shop clerk", korean:"점원", roman:"jeomwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUsOMCjDHYBjEGhWTLVSE4RixY9nINzG9VIK1UrLQUtD39o0C3RDXic_-UVPuk5_DNTOwJkp_20WF8NnCPzT_EGqX4Q869qyKqiedAdXxfJwwDU2zxQIw3ybRoH1HNcP4jjDmbEgzsLoAobvIY2TEooXgeHN3klQ7zCUDYNvd9pUIfox0qb4v4OkgZgSI/s940/vibe%20%283%2944.jpg"},
    {answer:"salesperson", korean:"판매원", roman:"panmaewon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3rYR61I6o26sNs11iVx_Hoqc3mA8fv24OytSL9Bu4enVNHPGySRUMKq6yOzISBb5RNqDE7ip3LR7m-xBgsg4cRZZanX2-oibqJJwphRKjPZt7oHSsrUuJu8ZUmfCVslHay6esOmWdRhtcsG1I4UPCS49H_jP5Uq9ySjCTmVBjAqe0Zcs6gV1iZI2QeM8/s940/vibe%20%283%2955.jpg"},
    {answer:"security guard", korean:"경비원", roman:"gyeongbiwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4RTEXyUMC0xBjh8XVyNt4E_gQG17OvC3vKsObRBhd_wmGn4jObIRZsn7Y42k4rtpKHmU2ifBdV8cw3Cyy_NNGrqdzIVf6gEyBOHQKr6oRcQUEATBXF6GTIToKmUxOQcIj5-VBeqE22YY-z7fXqqezjt3Cf0NHbe9N4JA0-H2kiY65lAe4hV0VN2H2g2g/s940/vibe%20%284%2966.jpg"},
    {answer:"tour guide", korean:"여행 가이드", roman:"yeohaeng gaideu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4HqejxVSx-NVtPUnvfjvX3cf_hLX4nrV__yn2n2J45FAWsarvl6aWH5K6m4dVIOlXIOAEPM0PCmWGCQtN45tR-ndi8s5cdnO2-1Dlh-yfb0TBQA-gtppKGAVO2NzIb2cK1GjvjO7ZDu25CGYHWW7fefKpA1RY9gYoQ6fjFrVBiUxPYRBNxYSkRjYm9rY/s940/vibe%20%284%2977.jpg"},
    {answer:"student", korean:"학생", roman:"haksaeng", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsQ4tFFNjZyK4Sc5NqbfTLg7Dwmx_zP0ii2jlHgNcEjejZ-jVCl1MmsQqBZlbKjBfbduvEebW3CzQ47mYXJVImoWY7OAK4KKhaE8FVDBTJx5zio2InqA_ieAQLqjV5TCPdZKa_H-ijOQMchk71p32OGXnTTFtasmyAGzEJ0jZFk044XvMGzgiK3bOEgh0/s940/vibe%20%283%2988.jpg"},
    {answer:"painter", korean:"화가", roman:"hwaga", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaACxlxdCAQ55gW8L4yvED_qz_AFoVen7cTmuDpKZlzyJ6zyu7aSSs-b7PDivX6fCtrNMA62GbAioERS1JFDkmxr-e3grvHYX9TUvIWEPLLHCz5EqIY4AKlVLfsrsjgNxusD24UOjevsx2-GwRqR5JiM3289hqP_1NmwDJ_8Sai4zVZWX5VNHqJ07ZWwE/s940/vibe%20%284%29.jpg"},
    {answer:"professor", korean:"대학교수", roman:"daehakgyosu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYxmOc2zunki6WccKrRfHm3AvkxPjYkd1hV3LSrvY0dGQ1OfjhOSg77rXoVXqd8pY9Q1da7loO3_Sf1YUHL6M1YqdezSPpHkN-hMkpISD9YXbdTMKR9YpKZ2BoS7xbOFWeuOztPTFyJKwFGqoAaVqWf17cWPxbV08HsU7_VOx6WQJAmyYT8JJ9zo0Aac8/s940/vibe%20%284%2933.jpg"},
    {answer:"lawyer", korean:"변호사", roman:"byeonhosa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQRBvFVUaaG6zmdF0rd2ol9irZcTM7hOPQ69sOrGN-i8-JsrPk_cjVnPlMJUfK4Y6cTcqZf_GckLNkaoVqWu7bVsd2K7XvGGlLYm4iJ3q82xw01rehqNBvVOJZyWxFUB0pnhWqhvWTC3DGVCsa4CcRrtzOJr575qvx9EcFlItIo3sK1EgA6i6Hh83PrO4/s940/vibe%20%284%2944.jpg"},
    {answer:"police officer", korean:"경찰관", roman:"gyeongchalgwan", 
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaaO1Uebqf97W7I6WkanqvgW3dn_K0pHLEdqVMUng2AjraHYhIIxmwz5waL-fMuU4G4TrPz38Q0UlcWe-bge7fHIAYtvfDNNfZIcvqHs-eM9TP9D0eFBrBU67UfGi7qPhxF5BGzklRHfYTOhWIi8wF3ucZ0tVke5zDxlbON7CXEKKrEevMCDtxruQ0vSo/s940/vibe%20%283%2933.jpg"},
    {answer:"firefighter", korean:"소방관", roman:"sobanggwan", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHUdN7Sb_BGAxhUNTdilvaMPPncQgsPDh896tiLr8oUrs1830Mdu4L9vxgZGcPymFjVGTlIqqVLZYcanek6ilwil_cYcIadRNpYqxL8ourm2Pwc_4zkp5O_WVc5prcp3peS5xwJ1B8dHC1aHUFD9iGZIp21M4pPbVCd762CSgni66x8_5yC181fuvNzLQ/s940/vibe%20%284%2955.jpg"},
    {answer:"civil servant", korean:"공무원", roman:"gongmuwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgij2A5ga1viM9hubXQEgv8CI_gsSlAOlJRXx5PnDoqMlGutGO68w6mV1LCY88MrKiZvnlXgOMIoTkHGWZ1kRItl0WFGBJE0tH4RK8QDpxOaYAMYW_IxT7aKwWTN1N5ZcTLzEpWRiriK7rgrQ1vxdWqxpeR5o-CCvzWZTzSARr1eJzpCTB5PssBdOgUSMw/s940/vibe%20%284%2967.jpg"},
    {answer:"social worker", korean:"사회복지사", roman:"sahoebokjisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAHRKvFFwmEEqbJTreBnNhe1DTvAqVHt8cZ2F2hixFyncwrSgWPoyo1Hvuyq_OqiTdvmUYslN4aOWExECF-EF7XpnnqnJwhCLul1OCHeuDFdqgsFW85gXVqXem4AXNGckz-6BcXOvSvXbYbO60M4KP-D8OSGh8yg6OcJ7FuikynHpNYVCR0cgpcBKZtY4/s940/vibe%20%284%290utrh.jpg"},
    {answer:"nurse", korean:"간호사", roman:"ganhosa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifnBSAGacmc2r19qaVEckFgJTB-4VssVWUDz6g_5qrc5zCLDHn8qFW5-pVJ6VMa-FTgBRy4LqiuRz6zC-3fuLcX1X0eEInKab5fd39D4kA8nq93BS3zK2O4iRsHGqCQanz6DpGPdFl_13bSEFc8X_Klyw5F4dEcjNDOt5EOFd57-OxnVp_ajP7IirRHOQ/s940/vibe%20%283%2900.jpg"},
    {answer:"pharmacist", korean:"약사", roman:"yaksa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht867-f1eTpbjZ0t5MFwEWToQ6jl0DJtRM2qfTB8nXARz9TC_FvxGX-mnOb67NtE8WcHWmzJ9QevHjcPyQwcLfzVDbDk52hvtPXRhiw33vl4-wGQWHAIDbeHaRDPp38vKHDnBZDCBdOWM0SZw97bLPmmgRuoilvGfZpMyuDFQjneHx8BwYV5nv96OMH7c/s940/vibe%20%284%29.jpg"},
    {answer:"dentist", korean:"치과의사", roman:"chigwa uisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRmTm4y9aVym19rZPFrklR8gnJa2hdwQ2Pk7gJe4kwYO60nN-xd_bz1m29MeraMD8mTz3Fgdwcso4wMxRLIWpPEE9paybIV-wIRA0N7czGSyp4ICW9fc1Z0LbkjDlyCVMTBesehqSSX4-rtuSQTNzmlA3ryGNOyZRKIde4rAm1S-Qi8tHUtaSH-2Ojo9o/s940/vibe%20%284%290.jpg"},
    {answer:"veterinarian", korean:"수의사", roman:"suisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOxsYK7G13uK6PSwjzi8voJnvNlQ__POo3JNVu_2usDHzAlIJGznG1_jrr4YvoCjTVuHOURBqsfrpl9lVHOMiwSZar8CPiOkwwVJQ9aMmkGeALhPl_AOC5XwT-05Om5oQ-Nj84KLT3YagE4TnLC-vWYdCZfKNS2xKskdIyUat24-iQTrtlbBNosBIk_YA/s940/vibe%20%284%291.jpg"},
    {answer:"chef", korean:"요리사", roman:"yorisa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwSELgyxVavpoe4Wx9Hi5mGOYXl6TxN-qXDkHNdHNyYiKq6wS0C2UZM7QnOhl_83f-cM0OURFwRG0WOyIzBsVWCjz6AK1WztAtBoAEF5gtFF_c0eR_ZpfDfp35-7Oh1aDdPddEZiHrGrzR626WJSfDh7wWaD4i1IXsAwQHg7VpRYiiZcUljy_AJcZP3h0/s940/vibe%20%283%2955.jpg"},
    {answer:"barista", korean:"바리스타", roman:"bariseuta", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXUV5jTN-HJDoZtrb7UmiQLfM5wZpmvC0y1F7-SrzPGWoLE_8nBq2bglhFMUFW1TTkshOhCkML_jJB-teetd5yWDmK8VLm_Lc6m27sds3JEwSbKcyDDPR28Kcj1DRgcUzlPyYzYXLot5vYmBofbKm8gkq6EyZ9jLaEXlENmIJtKW9i2m8bOqt3R04qxyQ/s940/vibe%20%283%2966.jpg"},
    {answer:"hairdresser", korean:"미용사", roman:"miyongsa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdHLba2PLWx-c0a6gJG7AxPkW3ZcC2lbrvBOe4ePcCcfBklho0TEvt3Jc7yR9eqUvdLa9ybMcK5Zu2x7q-n2Ldi0xG-31L5tbkxbLy0RRKw1pKNQOcpFqJoP6iUrcmt3u6WDhKfnAUqlCM3D9BcfVfBqy6l3Il5THipVQuDHfF4VI1ka5aLH9PtYXYKaWsbFwO_pERXw7YW0-nTF20Sva21WCJfCm0WtM1xalt8gg/s940/vibe%20%284%297.jpg"},
    {answer:"flight attendant", korean:"승무원", roman:"seungmuwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDp9R-VBA5kwXvt0HChvvUf-3GTovy5c5NOWt0kXMXufIZ8fmKJJfzpiqdwE7jjEL_xrdeRzRxpyzZbb4NUqxs6yt7GIJEOl2t6EF-xmtDqmLGyf2FlgBNcN7youpyxBUdS4CQanIN7ryRffwb2YHYOIPZxWPNY5cICq23FMZn4vLvKs5LS8nqlPy4wRg/s940/vibe%20%284%293.jpg"},
    {answer:"journalist", korean:"기자", roman:"gija", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYkenHqHjieFuFxCWvT-zGyeZaXglVzKOJYC9ZDzcuGvrsHIb92NzZ3fvZvWrsS8RrJKvcGydwRcZgFspJFQy407MwMvDopAxP3j_ob5qBYX70aCZV8MU_5zeD5bR37pDrHsoJ39fdeWHWCHcj698_6-mspSgPqKgeXDQrWxA45p4tQ982Xd3p49QRxb0/s940/vibe%20%284%294.jpg"},
    {answer:"interpreter", korean:"통역사", roman:"tongyeoksa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT5waYSOC_YcI92XXPUqoRF64Mn3WFZ_Emktqe_LmK87YRJjBQJ1NKFCJXVkf0EINZg1YOubPY8rifxhnE92Dg2GWsGopU6VSppmuF9Ijl78-dDz3eEL-huyap7hQbSWLgbFIIm5Th4_2OeWlmC7EqP6y4Qk9rIjsIukgTiu3CzfGpzT0MsfTA5XAadWk/s940/vibe%20%284%295.jpg"},
    {answer:"writer", korean:"작가", roman:"jakga", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxW5Hd6OKXzcCvbvqNNmWliPCnAkGWa9nRHOj5F3WUcL7JpJmvvTvmfIO8Jf6CLf4jKlSqj1GL6tBk1TLY7PlwAt2j8aXxTJwCRQnTU5N7xLhU-0Boht5zX_430Ujv-0seZADZosHGbEvP7_D7IQo2et49WsZLNyHwhM3PMDDkRRdTOybAzhevZlIyuOM/s940/vibe%20%284%2915.jpg"},
    {answer:"designer", korean:"디자이너", roman:"dijaineo", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhdOymnSP8dkvirWiJRwAQJSlRQ6lLGu1ZP1rp93D8r2t28S02Q15bCfPssCqatTUXkkJ2bsWD1U0dqY3hGCjruaMKWfFySRwdjsCs1ZUCXFKXt5OFfadF2p_653ygImvYh4Iw_PSRj2Gx63jfNwjAFxUxKHzavVq1NutME2Yysk2zqm8ds3MHX7J-AjM/s940/vibe%20%284%296.jpg"},
    {answer:"actor", korean:"배우", roman:"baeu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2JDRAxKW4JOe72BnAak2WDIwbOtTCUvhQ4SBknmspF7c5xPxJyHbbC6gnHcC73I4poSbPrRep0sN0rytHGIe_xBYGh0dU17nG2_ycIirRGRgB5bAi20JnKPvdHcfF4VI1ka5aLH9PtYXYKaWsbFwO_pERXw7YW0-nTF20Sva21WCJfCm0WtM1xalt8gg/s940/vibe%20%284%297.jpg"},
    {answer:"model", korean:"모델", roman:"model", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCmXTZAfhnIJ1JscHhQjwVBSmSXNsG9-AyGVb9AD-GczxcgEqjR30AGfrgg4bEFu3RjJQCF5D1U7jV8bJvLMXtTn91mql3kGs7f9zHvUFNpih1GYhBpAW8hY1st7AcAqLzFT7l7rIFuNe1sf-fwPwK_ljj4oI9SL-1u26t_7hV848qy4NePnHLybVF0fs/s940/vibe%20%284%298.jpg"},
    {answer:"singer", korean:"가수", roman:"gasu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOrEzsJ87m2OpmsgCiEjZSe1XCq6i8qEloR25sD-MXZZB0wyNbDFddrmKlRimDlWufZZl8ZOlpAgwp8tVpqEaNlEF7NKIPwFTEoe0ORjggBlPKG29g9qOcbUtrbXYNpIEY64kbOGRVvzZeXrMXzS0Kyw9FWUCNC8n7NMc1eRNyrLHJTmjLRZYNUbpPpWc/s940/vibe%20%284%299.jpg"},
    {answer:"judge", korean:"판사", roman:"pansa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzSG1X8Ovg-QtUxWBqYNQiD8SDvReKEXQrCxJNyscbn2rQTesMWsvhC4tG4bNJ5XQRU7WAVDv4oynUOnBxZQxHqMeuA4qCdPTLWWH6eII3zOKU3gMioDnY8tyxrO3Sa8MAu1fBgHiC6RM5REHOWQ_XWjJQ6V5y-2_Oamf9UVGMYA_SAykK74mADVNuIf0/s940/vibe%20%284%2910.jpg"},
    {answer:"housewife", korean:"주부", roman:"jubu", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixkVqF0Nc6xO-f1udbpniyHspqWMZwizse-gVHQIMfu_dA53WKe_ofhDvnQn8KJEfGQf2Gau6zr3ixUmuFXoxuUujI2gTu4L5WidOQNrDuX3opIeptRA-bPRC_ZD45O_xot1oPH-eNJn6ILMQBJZ0TrKxGU-81KhMCFh9NpSOxdkVa9sE88Wc29AnjjrU/s940/vibe%20%284%2911.jpg"},
    {answer:"office worker", korean:"회사원", roman:"hoesawon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnhMzH7j9zv-LZoaVceEQbOQ7A4xEvmJwf4x48Um5reVmpMHQF-wH84qEWq3_Ik0eMFC_2T6KM80u-97LYpItd4Pr4w2DzEUGB-EZdqAlANBU4yjlWw8zPSGabRrqxWA_582iHNZwK1zgG06V3v6xlumWVxojuLgGFkJPUIXmSD-KQmBvhC_YcUlM0Pc0/s940/vibe%20%284%2912.jpg"},
    {answer:"captain (ship)", korean:"선장", roman:"seonjang", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAZ4EBRxoaV8Z8ZNksdnZiN0ze2ruuC07CFv2Rc9sRfibJxOlvyRwU-46hdgPB6QGlui4jNs3e0wTu6dD4JsZioI1hoFxIzLC4LOBpkGAoymc6iW-38oo9fxBG9syZhcht8LFZkbr0Kwzm3AAE8PWWRWrgfI1JI5ZFGpo-t84bu8HRLGL4v9xvMqo4H4A/s940/vibe%20%284%2913.jpg"},
    {answer:"sailor", korean:"선원", roman:"seonwon", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_-Fo1COi4cv677NOsJf4uazQ2E7LOk1K8wWfgcKtLRxlYxiYaU2lpMMhsONOGqzcAKVg7x74QKUisM3x6Y71i0VZPEqUAFxKOyq5el3YXflz4WXP9UMlhdWbyZn8ivVXCUFAWLuaORWR9whtqXCyPDszqR501Stjs3HV0tInrI3np97mY6J4RUOmsQpc/s940/vibe%20%284%2914.jpg"},
    {answer:"politician", korean:"정치가", roman:"jeongchiga", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvJWnXd4TlYZv6NGOevIqpvOOb3IxRTBkFYdZb8BIAavKLLmTx72RnYVAgl5uQv4gkrgYkbK5lHK7QbEbOEqp248WQ3ouPQlZq-y_xwlQzwZW9CQ_JRkfpPcPqwiv5LkWk0iTl-vA9EvH0WtQiLFV6mK_VPGczzPoU85wvkGA895yK_pFG_t-ETGugoaQ/s940/vibe%20%284%29.jpg"},
    {answer:"president (nation)", korean:"대통령", roman:"daetongnyeong", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAQXBkjVJR3HkXheryvZTuvo1Oja6dANzAC5RDQmkBcufBruEuidjqLcIyNodueq_v5vD0vJFoMyZsZcYgHT7NbezhqQl4YbsrM2sAjadznUS5kg8dfYLhHJPGcg4S1mtldRcqCsQ94MFCUTLQygRBrEFj1sJnxZHuTiteWmgi02rwWc0tDNFUvHBzQ5E/s940/vibe%20%284%2900.jpg"},
    {answer:"pilot", korean:"조종사", roman:"jojongsa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMfcdbLCkFBzS8NoC0mQr9W17DOofCPgapGy0mOGWaOFlgByGfyJ0q4D20PgBWSqBAr6uhgtSW7ypL-k7wvKOH_-LVcRogsoPLY2ZJ5LuwLFuJBvfLiCB1B__uk5tYXpMv8JUUNiS3lxSeberyumiEdgsoTTQsPGl2tC0su-EGbzvSMVEugtKrx6EWERw/s940/vibe%20%284%2911.jpg"},
    {answer:"baker", korean:"제빵사", roman:"jeppangsa", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY0e7sO7YPBnm3N1bXxeNqU9iDDn53_8STYyOC4xTTfuC1DxlLo1ocNN-navFBba1x46G7ayX7dE1x3uFazqS_IoRbLnHKkPHC_Jb0hqtPzih3m0jhq7w3mszwNrs1hkibzMsCqEkcQ8zudjTNecrWYUlhhPNWvemoxZ5DaDC3pwXIaWwzTz-fK8XIMTw/s940/vibe%20%284%2922.jpg"},
    {answer:"photographer", korean:"사진작가", roman:"sajinjakga", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTI0f2hrqxAFYfxlU_lVdgPaewgJ5v8GmMtKZXDUrFwtFC9Xw1KvP7zYQSMKQuJCyNT-d0owxmGoekTHC3U8TYfyNyaCcVaWngFIm80RApDZBlHzpmFHpOtV1B4IuXyf6fsz5Aj5_YQ9K1mlO2IDqqYUQWHv4eu4oqo_AkDMzDImrUVnRo2Od7YPoSR1c/s940/vibe%20%284%2933.jpg"},
    {answer:"electrician", korean:"전기공", roman:"jeongigong", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5RgulF0vG2yZKtCVtczL-VagJk1hZAaIo-lEFLCNXnJpbm4lHxjsIVTsxGt-kSKKJbcNRk7Qp4ngKhyphenhyphenhbpDFnd-Rn0eJgAea8Pfi05uqayyYr9-bPr_61_DxQBoiyBoSuvBDYjiRR8-MEw-KG_vgKe7Rwt-xR-2hAX9E5AjNmELzlo0zOlM_WZpP8QyI/s940/vibe%20%284%2944.jpg"}
];

// shuffle helper
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// create a shuffled sequence of quizzes
const shuffledQuizzes = shuffle([...quizzes]);
let currentQuiz = 0;

function loadQuiz() {
    const quiz = shuffledQuizzes[currentQuiz];
    const questionEl = document.getElementById("quiz-word");
    const imgEl = document.getElementById("quiz-img");
    const optionsEl = document.getElementById("options");
    const resultEl = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
    
    // set question (English word only, no quotes)
    questionEl.innerText = quiz.answer;
    
    // set image if available, else hide
    if (quiz.image && quiz.image.trim() !== "") {
        imgEl.src = quiz.image;
        imgEl.style.display = "block";
    } else {
        imgEl.style.display = "none";
    }

    // clear old
    optionsEl.innerHTML = "";
    resultEl.innerHTML = "";
    nextBtn.style.display = "none";

    // build 3-option set: correct + 2 random other jobs
    const otherOptions = shuffle(quizzes.filter(q => q.answer !== quiz.answer)).slice(0,2);
    const optionSet = shuffle([quiz, ...otherOptions]);

    optionSet.forEach(opt => {
        const row = document.createElement("div");
        row.className = "option-row";

        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerText = `${opt.korean} (${opt.roman})`;
        // checkAnswer 함수는 전역 함수로 유지합니다.
        btn.onclick = () => checkAnswer(opt.answer, opt.korean, opt.roman); 

        const sb = document.createElement("button");
        sb.className = "sound-btn";
        // playSound 함수는 전역 함수로 유지합니다.
        sb.innerText = "🔊";
        sb.onclick = () => playSound(opt.korean); 

        row.appendChild(btn);
        row.appendChild(sb);
        optionsEl.appendChild(row);
    });
}

function checkAnswer(selected, korean, roman) {
    const quiz = shuffledQuizzes[currentQuiz];
    const resultEl = document.getElementById("result");

    if (selected === quiz.answer) {
        resultEl.style.color = "green";
        resultEl.innerText = `✅ Correct! ${korean} (${roman})`;
        document.getElementById("nextBtn").style.display = "block";
    } else {
        resultEl.style.color = "red";
        resultEl.innerText = "❌ Wrong! Try again.";
    }
}

function nextQuiz() {
    currentQuiz++;
    if (currentQuiz >= shuffledQuizzes.length) {
        // finished
        document.getElementById("quiz-word").innerText = "🎉 You completed all questions!";
        document.getElementById("quiz-img").style.display = "none";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = "";
        document.getElementById("nextBtn").style.display = "none";
        return;
    }
    loadQuiz();
}

// play Korean TTS
function playSound(text) {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    // optional: adjust rate/pitch if desired
    // utterance.rate = 0.95;
    // utterance.pitch = 1;
    window.speechSynthesis.cancel(); // stop previous
    window.speechSynthesis.speak(utterance);
}

// start
loadQuiz();