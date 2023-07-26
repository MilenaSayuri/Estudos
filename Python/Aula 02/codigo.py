import pyautogui 
import pandas as pd
import time

pyautogui.PAUSE = 0.6

pyautogui.press("win")
pyautogui.write("opera")
pyautogui.press("enter")

pyautogui.write("https://dlp.hashtagtreinamentos.com/python/intensivao/login")
pyautogui.press("enter")
time.sleep(3)

pyautogui.click(x=738, y=388)
pyautogui.write("milena@gmail.com")
pyautogui.press("tab")
pyautogui.write("sua senha")
pyautogui.click(x=967, y=550)
time.sleep(3)

import pandas

tabela = pandas.read_csv("C:\estudos\Estudos\Python\Aula 02\produtos.csv")
print(tabela)

for linha in tabela.index:
    pyautogui.click(x=705, y=275)
    pyautogui.write(str(tabela.loc[linha, "codigo"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "marca"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "tipo"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "categoria"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "preco_unitario"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "custo"]))
    pyautogui.press("tab")
    if not pd.isna(tabela.loc[linha, "obs"]):
        pyautogui.write(str(tabela.loc[linha, "obs"]))
    pyautogui.press("tab")
    pyautogui.press("enter")
    pyautogui.scroll(5000)
