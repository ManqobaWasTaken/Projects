#My attempt at implementing the kmp algorithm from scratch



def KMP(str1,str2):
    prefix_table=build_prefix_table(str2)
    string_ptr=0
    prefix_ptr=0
    if str1[string_ptr]==str2[prefix_ptr]:
        string_ptr+=1
        prefix_ptr+=1
    else:
        prefix_ptr=prefix_table[prefix_ptr+1]


def build_prefix_table(word):
    prefix_table=[0]*len(word)
    left_ptr=0
    right_ptr=1
    prefix_table[0]=0
    while (right_ptr<len(word)):
        if word[left_ptr]==word[right_ptr]:
            prefix_table[right_ptr]=left_ptr
            left_ptr+=1
            right_ptr+=1
        else:
            left_ptr=0
            right_ptr+=1
    return prefix_table



