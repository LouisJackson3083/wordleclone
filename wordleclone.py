
with open("7letterwords.txt","r") as file: 
    text=file.readlines()

i=0
while i < len(text): 
    text[i]=text[i].strip()
    print(text[i])
    i+=1
print(i)


##    lineNew = ''
##    for i in line:
##        if (i != ' '):
##            lineNew += i;
##    print(lineNew)

##with open('7letterwords.txt') as words:
##    for line in words:
##        print (line,)  # The comma to suppress the extra new line char
##
print("DONE")

words.close()
