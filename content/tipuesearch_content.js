var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w4', 'text': '牛頓第二運動定律 物體所受到的外力等於動量對時間的一階導數(一次微分值)。當物體在運動中質量不變時，牛頓第二定律也可以用質量與加速度的乘積表示，又稱為「加速度定律」，且用途極為廣泛，它可以用來設計平穩地聳立於雲端的台北101摩天大廈，也可以用來計算從地球發射火箭登陸月球的運動軌道。 當運動中的物體質量不變時，牛頓第二定律可以表述為：物體所受到的外力等於質量與加速度的乘積，而加速度與外力同方向。以方程式表達，F=ma ；其中，F是外力，m 是質量，a 是加速度。 按照第二定律，設定物體的質量不變，則物體的加速度與所受到的外力成正比，設定物體所受到的外力不變，則物體的加速度與質量成反比。另一種定義是基於慣性的概念。在這定義裡，質量被用來量度物體對於改變它的運動狀態的抗拒能力。因此被稱為「慣性質量」。然而，不管這定義是如何真確，它並沒有給出量度質量的方法，人們無法直接估算物體的質量數值，因此，這定義似乎更像是一種形上學定義。回溯在古典力學裡。假設使用一條先前論述的標準彈簧，施加一個標準單位力F0於某物體，則可從測量這物體隨著時間流易而呈現出的速度，估算出這物體的加速度，標記其為a0。繼續做實驗，假設施加兩個標準單位力2F0於這物體，則可從測得這物體的加速度為2a0。 類似地做實驗，施加彈力F於這物體，然後測量這物體的加速度a，可以得到力與加速度彼此之間的關係式：F=ka；其中，k是比例常數。辨識這比例常數為慣性質量，則可察覺這關係式就是牛頓第二定律的方程式。 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n}\n\n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'W7', 'text': 'mass-spring-damper 系統 \n 質量-彈簧-阻尼器模型由分佈在整個物件中並透過彈簧和阻尼器網路互連的離散質量節點組成。該模型非常適合對具有複雜材料屬性（例如非線性和黏彈性）的物件進行建模。MATLAB等軟體套件可用於運行此類模型的模擬。除了工程模擬之外，這些系統也應用於電腦圖形和電腦動畫。 控制彈簧-質量-阻尼器 系統的振動是工程教科書中一個深入研究的問題。振盪響應由兩個基本參數 tau 和 zeta 控制，這兩個參數設定振盪的振幅和頻率。這兩個參數是質量、彈簧剛度和阻尼的簡單函數。根據彈簧質量阻尼器理論，如果 tau 和 zeta 的值設定相同，則兩輛不同重量和彈簧剛度的自行車將回溯完全相同的懸吊響應曲線。  這項基本物理原理為從一輛自行車到另一輛自行車提供了衡量懸吊性能的直接途徑，並透過調整阻尼來補償重量和彈簧剛度的差異，從而保持相同的懸吊響應、感覺和行為。 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': "Euler's Method 數值分析相關資料 \n 在數學和計算機科學中，歐拉方法（英語：Euler method），是一種一階數值方法，用以對給定初值的常微分方程求解。歐拉方法是常微分方程數值方法中最基本的顯式方法；也是一個一階方法，意味著其局部截斷誤差正比於步長的平方，並且其全局截斷誤差正比於步長。 \n \xa0 \n \xa0\xa0 \n 範例:\xa0 \n 1. 一階微分方程式。\xa0explicit。 \n d\n—— f(t) = f(t) + 1\ndt\n \n (f(t) - f(t-Δt)) / Δt = f(t) + 1\n(f[i] - f[i-1]) / Δt = f[i-1] + 1\n(f[i] - f[i-1]) = (f[i-1] + 1) ⋅ Δt\nf[i] = f[i-1] + (f[i-1] + 1) ⋅ Δt \n \n float  f[ 1000 ];  // 解 \n float  Δt =  0.01 ;  // 取樣間距 \n float  t0 =  0 , f0 =  2 ;  // 初始條件 f(t0) = f0 \n \n void  first_order() \n { \n  f[ 0 ] = f0; \n   for  ( int  i= 1 ; i< 1000 ; ++i) \n  f[i] = f[i- 1 ] + (f[i- 1 ] +  1 ) * Δt; \n \n   // 印出t、f(t)、正確解答 \n   for  ( int  i= 0 ; i< 1000 ; ++i) \n  { \n   float  t = t0 + i * Δt; \n   float  ans = exp(t) *  3  -  1 ; \n  cout << t <<  ' '  << f[i] <<  ' '  << ans <<  '\\n' ; \n  } \n } \n \n 2. 二階微分方程式。explicit。 \n d²         d\n——— f(t) = —— f(t) - f(t)\ndt²        dt\n \n (f(t+Δt) - 2f(t) + f(t-Δt)) / (Δt)² = (f(t) + f(t-Δt)) / Δt - f(t)\n(f[i+1] - 2f[i] + f[i-1]) / (Δt)² = (f[i] + f[i-1]) / Δt - f[i]\nf[i+1] = (2f[i] - f[i-1]) + (f[i] + f[i-1]) ⋅ Δt - f[i] ⋅ (Δt)²\nf[i] = (2f[i-1] - f[i-2]) + (f[i-1] + f[i-2]) ⋅ Δt - f[i-1] ⋅ (Δt)² \n \n float  f[ 1000 ]; \n float  Δt =  0.01 ; \n float  t0 =  0 , f0 =  0 , f1 =  0.1 ; \n \n void  second_order() \n { \n  f[ 0 ] = f0;  // f(t0) = f0 \n  f[ 1 ] = f1;  // f(t0+Δt) = f1 \n   for  ( int  i= 2 ; i< 1000 ; ++i) \n  f[i] = ( 2  * f[i- 1 ] - f[i- 2 ]) \n  + (f[i- 1 ] + f[i- 2 ]) * Δt \n  - f[i- 1 ] * Δt * Δt; \n \n   // 印出t、f(t)、正確解答 \n   for  ( int  i= 0 ; i< 1000 ; ++i) \n  { \n   float  t = t0 + i * Δt; \n   float  ans = f1 * exp((t-Δt)/ 2 ) \n  * sin(t*sqrt( 3 )/ 2 ) \n  / sin(Δt*sqrt( 3 )/ 2 ); \n  cout << t <<  ' '  << f[i] <<  ' '  << ans <<  '\\n' ; \n  } \n } \n \n \n \n", 'tags': '', 'url': 'W8.html'}, {'title': 'W12', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\nint width = 800;\nint height = 600;\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\nFILE *outputFile = fopen("hellogd.png", "wb");\nif (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n}\n\nint red = gdImageColorAllocate(img, 255, 0, 0);\nint blue = gdImageColorAllocate(img, 0, 0, 255);\nint black = gdImageColorAllocate(img, 0, 0, 0);\nint white = gdImageColorAllocate(img, 255, 255, 255);\n// 長方形塗色\ngdImageFilledRectangle(img, 0, 0, width, height, white);\ngdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n// 橢圓形塗色\ngdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n// 橢圓形畫線\ngdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n// 畫直線\ngdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n// 多邊形畫線\ngdPoint points[4];\npoints[0].x = (int)width/4;\npoints[0].y = (int)height*3/4;\npoints[1].x = points[0].x + 100;\npoints[1].y = points[0].y;\npoints[2].x = points[1].x;\npoints[2].y = points[1].y + 100;\npoints[3].x = points[2].x - 100;\npoints[3].y = points[2].y;\ngdImagePolygon(img, points, 4, black);\n\n// 多邊形塗色\ngdPoint points2[4];\npoints2[0].x = (int)width/3;\npoints2[0].y = (int)height/2;\npoints2[1].x = points2[0].x + 100;\npoints2[1].y = points2[0].y;\npoints2[2].x = points2[1].x;\npoints2[2].y = points2[1].y + 100;\npoints2[3].x = points2[2].x - 150;\npoints2[3].y = points2[2].y;\ngdImageFilledPolygon(img, points2, 4, red);\n\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '這堂課對於零基礎的我來說，有點困難，非常感謝同學平常的幫忙讓我跟得上教學進度，往後我也會繼續認真聽課，多運用影片教成學習，還有上課如有不會的地方會及時提問，謝謝老師！ \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1.', 'text': '#include <stdio.h>\n\nint main()\n{\n// Print Name\nprintf("Name :王妍方\\n");\n\n// Print Date of Birth\nprintf("DOB : July 17, 2005\\n");\n\n// Print Mobile Number\nprintf("Mobile : 0909291966\\n");\n\n// Indicate successful execution\nreturn(0);\n}\n\n \n \n', 'tags': '', 'url': '1..html'}, {'title': '2.', 'text': '#include <stdio.h>\n\nint main(int argc, char** argv) {\n// Check for C standard version\n#if __STDC_VERSION__ >= 201710L\nprintf("We are using C18!\\n");\n#elif __STDC_VERSION__ >= 201112L\nprintf("We are using C11!\\n");\n#elif __STDC_VERSION__ >= 199901L\nprintf("We are using C99!\\n");\n#else\nprintf("We are using C89/C90!\\n");\n#endif\n\n// Indicate successful execution\nreturn 0;\n} \n \n \n', 'tags': '', 'url': '2..html'}, {'title': '3.', 'text': '#include <stdio.h>\n\nint main()\n{\n// Print a line of hashes\nprintf("######\\n");\n\n// Print a single hash\nprintf("#\\n");\n\n// Print a single hash\nprintf("#\\n");\n\n// Print a line of hashes\nprintf("#####\\n");\n\n// Print a single hash\nprintf("#\\n");\n\n// Print a single hash\nprintf("#\\n");\n\n// Print a single hash\nprintf("#\\n");\n\nreturn(0);\n} \n \n \n', 'tags': '', 'url': '3..html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};