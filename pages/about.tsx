import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF, faYoutube, faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    name: 'Ngo Van Tuan',
    role: 'Frontend Developer',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHV1dX09PTf39/8/Pzb29vu7u7x8fHl5eX5+fnc3Nzr6+vi4uLw8PCR9fa8AAAFQElEQVR4nO2d6ZKjMAyEjQzmSsj7v+2gMBnIHcCy2hl9Vbs/9qiaLtmSfDXOGYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbIOI/n59D97z76MmXw/dsS2Z9tgNtf/VOf2DvCFXd20fimtC33a1yzyYU3Sq5lbcQmZTLf5ljlDd9E/lTfRNnXEgq/KNvImy0v5Bt0HVu/AtAlllF0dPh7J4Pv9uCUVZU1aTkVzzsboLTU6Jdc0AncloqNKxWDFCL4z/45iHRPKfZdBHlD4DjVSvD98ikPDF0VO1Qx9ToefUvQJHidoSXkJV2DNGmRCgU+r+CIJHsY4isChqbSHP8Fvq/CN61GSzvQ7eUmpLeQh3MtEA7G58pCxzoQJc9++uE0tC0JZzB61fLr2mQRunh8gCi+KgLekaKmOOUSaUWEGMm2YmoFobilcKZ5CCuHvJ9BigIIqEECiIPlrHfUuNUvaj18ILODUxajszg9PYyOQZBiTX0ElM4QlkmMqMUQZkmEplUgZjP6MTjGGnLY6hVkxgUbQIE5Fi7T89okdQ6AUFFoV+U+MF1r5LDgCNWyeqECDVRN1EvAdgW1Gs7Z4AaL4FezYGoG8TWv1eAFgFm0JTaAoBFEo23hCt9z+oh8Jdm75CN4gqHLTlCW4HTyBsCn/7+pDX+IL7NBBrfMlyEQCKheMlsFQQA8IC2P2H/VISnIcQg/Q/nFt8/dmT3NEMyMGM84JnwAgFn5E7x0fh2+9iOKlcA5NnnND5E0RP+kcVvXMLUCEUmYlIs3CEBO6XYin8B3eEKXJjEwBflMa+q4/Ht7+3YNa83n5FAH0zM7an0d494TSk11C0t2uYYzTGE9kJ5IeyUSRCvyHdLTGgC9z9EjgEtGbtDu/2vsfHnYN/7PJU0P7hP2NzdwPaydzjN3ubZBJCx+4fG/xpcnD9WMAeQ2so4XPoPcQ+WJ/k1cBeWPnp4+N3+tjri7K1bKP6+Nav7QjbZ3+Cd+QOp9eee5Rr+H7hwUrsm3gfvLarKd/heQP7XLL3ZdMyJ/a+/DKPzylSZ+dSOjuYum+JnWEYhmEYf0xlnr27L8x/lj+jDH/omrbvF9uMIfR923QH7zJXSZNZ+au109m2PFeV5IZ2Ctuz5dPv37YD4IHvS85dth/WbNSUg8+rG6f6hdX8k3hm5M1ONGw7Ku2HPGbktu3gX434e27TdvfWs5mAr5Hq/be/SuT5GOnCCeYBjeePBUS7i3EgD1c5KPqNIbRAstd8vJtt4ew/jxTFcYRGv0GLdRhF8V93haIDOjAV8jfByal0EnmfF2CePVEr9AAxYNz19qKmCi3CXBwjKPYAMRStsjovbalwvtGuGsZRoNwLUiYoX9pnywhphYrGEV72kfNMrbaBQ07SUHCmV+vChc13ZrTKorBvyxKlqbjrquw6gsbzBNle5pZSo7dJN0aZ9AYZ3qcbo0xI/lVd8W7tluStTZpavyRxshF2aXtEYjOe9CFMHMT4n5V5T9oPz9TCK4qHClMGUdh39hkpN6bSR5AJ6Upi2nZmJlljk7QjXZIs12jkGSZZrqGjmsJE+/yiH0N4TSLLGo1+5kKaYaqVSZkk2VQtkzJpsqlOmplI4lGnOQ3TTEQ5u9L3JDE0Tb59cU2CzQzVRJMm1ejVe6aXF+gVpyFPRPkVlOzHj94j/5lgWZP594jb0At//Og90ssLOb/ZTxH3pVXahJoR345SLofyBTHtqeFjhdKjVF+hrEBTaApzUJj+4PAa8WNEgIovrNCpd23SAhNehHrM6utRP3IESPnqlEjaAAAAAElFTkSuQmCC',
    facebook: '',
    telegram: '',
  },
  {
    name: 'Tran Duc Long',
    role: 'Blockchain Developer',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHV1dX09PTf39/8/Pzb29vu7u7x8fHl5eX5+fnc3Nzr6+vi4uLw8PCR9fa8AAAFQElEQVR4nO2d6ZKjMAyEjQzmSsj7v+2gMBnIHcCy2hl9Vbs/9qiaLtmSfDXOGYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbIOI/n59D97z76MmXw/dsS2Z9tgNtf/VOf2DvCFXd20fimtC33a1yzyYU3Sq5lbcQmZTLf5ljlDd9E/lTfRNnXEgq/KNvImy0v5Bt0HVu/AtAlllF0dPh7J4Pv9uCUVZU1aTkVzzsboLTU6Jdc0AncloqNKxWDFCL4z/45iHRPKfZdBHlD4DjVSvD98ikPDF0VO1Qx9ToefUvQJHidoSXkJV2DNGmRCgU+r+CIJHsY4isChqbSHP8Fvq/CN61GSzvQ7eUmpLeQh3MtEA7G58pCxzoQJc9++uE0tC0JZzB61fLr2mQRunh8gCi+KgLekaKmOOUSaUWEGMm2YmoFobilcKZ5CCuHvJ9BigIIqEECiIPlrHfUuNUvaj18ILODUxajszg9PYyOQZBiTX0ElM4QlkmMqMUQZkmEplUgZjP6MTjGGnLY6hVkxgUbQIE5Fi7T89okdQ6AUFFoV+U+MF1r5LDgCNWyeqECDVRN1EvAdgW1Gs7Z4AaL4FezYGoG8TWv1eAFgFm0JTaAoBFEo23hCt9z+oh8Jdm75CN4gqHLTlCW4HTyBsCn/7+pDX+IL7NBBrfMlyEQCKheMlsFQQA8IC2P2H/VISnIcQg/Q/nFt8/dmT3NEMyMGM84JnwAgFn5E7x0fh2+9iOKlcA5NnnND5E0RP+kcVvXMLUCEUmYlIs3CEBO6XYin8B3eEKXJjEwBflMa+q4/Ht7+3YNa83n5FAH0zM7an0d494TSk11C0t2uYYzTGE9kJ5IeyUSRCvyHdLTGgC9z9EjgEtGbtDu/2vsfHnYN/7PJU0P7hP2NzdwPaydzjN3ubZBJCx+4fG/xpcnD9WMAeQ2so4XPoPcQ+WJ/k1cBeWPnp4+N3+tjri7K1bKP6+Nav7QjbZ3+Cd+QOp9eee5Rr+H7hwUrsm3gfvLarKd/heQP7XLL3ZdMyJ/a+/DKPzylSZ+dSOjuYum+JnWEYhmEYf0xlnr27L8x/lj+jDH/omrbvF9uMIfR923QH7zJXSZNZ+au109m2PFeV5IZ2Ctuz5dPv37YD4IHvS85dth/WbNSUg8+rG6f6hdX8k3hm5M1ONGw7Ku2HPGbktu3gX434e27TdvfWs5mAr5Hq/be/SuT5GOnCCeYBjeePBUS7i3EgD1c5KPqNIbRAstd8vJtt4ew/jxTFcYRGv0GLdRhF8V93haIDOjAV8jfByal0EnmfF2CePVEr9AAxYNz19qKmCi3CXBwjKPYAMRStsjovbalwvtGuGsZRoNwLUiYoX9pnywhphYrGEV72kfNMrbaBQ07SUHCmV+vChc13ZrTKorBvyxKlqbjrquw6gsbzBNle5pZSo7dJN0aZ9AYZ3qcbo0xI/lVd8W7tluStTZpavyRxshF2aXtEYjOe9CFMHMT4n5V5T9oPz9TCK4qHClMGUdh39hkpN6bSR5AJ6Upi2nZmJlljk7QjXZIs12jkGSZZrqGjmsJE+/yiH0N4TSLLGo1+5kKaYaqVSZkk2VQtkzJpsqlOmplI4lGnOQ3TTEQ5u9L3JDE0Tb59cU2CzQzVRJMm1ejVe6aXF+gVpyFPRPkVlOzHj94j/5lgWZP594jb0At//Og90ssLOb/ZTxH3pVXahJoR345SLofyBTHtqeFjhdKjVF+hrEBTaApzUJj+4PAa8WNEgIovrNCpd23SAhNehHrM6utRP3IESPnqlEjaAAAAAElFTkSuQmCC',
    facebook: 'https://www.facebook.com/profile.php?id=100071942796469',
    telegram: '',
  },
  {
    name: 'Pham Ngoc Duy',
    role: 'UX/UI',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHV1dX09PTf39/8/Pzb29vu7u7x8fHl5eX5+fnc3Nzr6+vi4uLw8PCR9fa8AAAFQElEQVR4nO2d6ZKjMAyEjQzmSsj7v+2gMBnIHcCy2hl9Vbs/9qiaLtmSfDXOGYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbIOI/n59D97z76MmXw/dsS2Z9tgNtf/VOf2DvCFXd20fimtC33a1yzyYU3Sq5lbcQmZTLf5ljlDd9E/lTfRNnXEgq/KNvImy0v5Bt0HVu/AtAlllF0dPh7J4Pv9uCUVZU1aTkVzzsboLTU6Jdc0AncloqNKxWDFCL4z/45iHRPKfZdBHlD4DjVSvD98ikPDF0VO1Qx9ToefUvQJHidoSXkJV2DNGmRCgU+r+CIJHsY4isChqbSHP8Fvq/CN61GSzvQ7eUmpLeQh3MtEA7G58pCxzoQJc9++uE0tC0JZzB61fLr2mQRunh8gCi+KgLekaKmOOUSaUWEGMm2YmoFobilcKZ5CCuHvJ9BigIIqEECiIPlrHfUuNUvaj18ILODUxajszg9PYyOQZBiTX0ElM4QlkmMqMUQZkmEplUgZjP6MTjGGnLY6hVkxgUbQIE5Fi7T89okdQ6AUFFoV+U+MF1r5LDgCNWyeqECDVRN1EvAdgW1Gs7Z4AaL4FezYGoG8TWv1eAFgFm0JTaAoBFEo23hCt9z+oh8Jdm75CN4gqHLTlCW4HTyBsCn/7+pDX+IL7NBBrfMlyEQCKheMlsFQQA8IC2P2H/VISnIcQg/Q/nFt8/dmT3NEMyMGM84JnwAgFn5E7x0fh2+9iOKlcA5NnnND5E0RP+kcVvXMLUCEUmYlIs3CEBO6XYin8B3eEKXJjEwBflMa+q4/Ht7+3YNa83n5FAH0zM7an0d494TSk11C0t2uYYzTGE9kJ5IeyUSRCvyHdLTGgC9z9EjgEtGbtDu/2vsfHnYN/7PJU0P7hP2NzdwPaydzjN3ubZBJCx+4fG/xpcnD9WMAeQ2so4XPoPcQ+WJ/k1cBeWPnp4+N3+tjri7K1bKP6+Nav7QjbZ3+Cd+QOp9eee5Rr+H7hwUrsm3gfvLarKd/heQP7XLL3ZdMyJ/a+/DKPzylSZ+dSOjuYum+JnWEYhmEYf0xlnr27L8x/lj+jDH/omrbvF9uMIfR923QH7zJXSZNZ+au109m2PFeV5IZ2Ctuz5dPv37YD4IHvS85dth/WbNSUg8+rG6f6hdX8k3hm5M1ONGw7Ku2HPGbktu3gX434e27TdvfWs5mAr5Hq/be/SuT5GOnCCeYBjeePBUS7i3EgD1c5KPqNIbRAstd8vJtt4ew/jxTFcYRGv0GLdRhF8V93haIDOjAV8jfByal0EnmfF2CePVEr9AAxYNz19qKmCi3CXBwjKPYAMRStsjovbalwvtGuGsZRoNwLUiYoX9pnywhphYrGEV72kfNMrbaBQ07SUHCmV+vChc13ZrTKorBvyxKlqbjrquw6gsbzBNle5pZSo7dJN0aZ9AYZ3qcbo0xI/lVd8W7tluStTZpavyRxshF2aXtEYjOe9CFMHMT4n5V5T9oPz9TCK4qHClMGUdh39hkpN6bSR5AJ6Upi2nZmJlljk7QjXZIs12jkGSZZrqGjmsJE+/yiH0N4TSLLGo1+5kKaYaqVSZkk2VQtkzJpsqlOmplI4lGnOQ3TTEQ5u9L3JDE0Tb59cU2CzQzVRJMm1ejVe6aXF+gVpyFPRPkVlOzHj94j/5lgWZP594jb0At//Og90ssLOb/ZTxH3pVXahJoR345SLofyBTHtqeFjhdKjVF+hrEBTaApzUJj+4PAa8WNEgIovrNCpd23SAhNehHrM6utRP3IESPnqlEjaAAAAAElFTkSuQmCC',
    facebook: '',
    telegram: '',
  },
  {
    name: 'Pham Van Giap',
    role: 'Frontend Developer',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHV1dX09PTf39/8/Pzb29vu7u7x8fHl5eX5+fnc3Nzr6+vi4uLw8PCR9fa8AAAFQElEQVR4nO2d6ZKjMAyEjQzmSsj7v+2gMBnIHcCy2hl9Vbs/9qiaLtmSfDXOGYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbIOI/n59D97z76MmXw/dsS2Z9tgNtf/VOf2DvCFXd20fimtC33a1yzyYU3Sq5lbcQmZTLf5ljlDd9E/lTfRNnXEgq/KNvImy0v5Bt0HVu/AtAlllF0dPh7J4Pv9uCUVZU1aTkVzzsboLTU6Jdc0AncloqNKxWDFCL4z/45iHRPKfZdBHlD4DjVSvD98ikPDF0VO1Qx9ToefUvQJHidoSXkJV2DNGmRCgU+r+CIJHsY4isChqbSHP8Fvq/CN61GSzvQ7eUmpLeQh3MtEA7G58pCxzoQJc9++uE0tC0JZzB61fLr2mQRunh8gCi+KgLekaKmOOUSaUWEGMm2YmoFobilcKZ5CCuHvJ9BigIIqEECiIPlrHfUuNUvaj18ILODUxajszg9PYyOQZBiTX0ElM4QlkmMqMUQZkmEplUgZjP6MTjGGnLY6hVkxgUbQIE5Fi7T89okdQ6AUFFoV+U+MF1r5LDgCNWyeqECDVRN1EvAdgW1Gs7Z4AaL4FezYGoG8TWv1eAFgFm0JTaAoBFEo23hCt9z+oh8Jdm75CN4gqHLTlCW4HTyBsCn/7+pDX+IL7NBBrfMlyEQCKheMlsFQQA8IC2P2H/VISnIcQg/Q/nFt8/dmT3NEMyMGM84JnwAgFn5E7x0fh2+9iOKlcA5NnnND5E0RP+kcVvXMLUCEUmYlIs3CEBO6XYin8B3eEKXJjEwBflMa+q4/Ht7+3YNa83n5FAH0zM7an0d494TSk11C0t2uYYzTGE9kJ5IeyUSRCvyHdLTGgC9z9EjgEtGbtDu/2vsfHnYN/7PJU0P7hP2NzdwPaydzjN3ubZBJCx+4fG/xpcnD9WMAeQ2so4XPoPcQ+WJ/k1cBeWPnp4+N3+tjri7K1bKP6+Nav7QjbZ3+Cd+QOp9eee5Rr+H7hwUrsm3gfvLarKd/heQP7XLL3ZdMyJ/a+/DKPzylSZ+dSOjuYum+JnWEYhmEYf0xlnr27L8x/lj+jDH/omrbvF9uMIfR923QH7zJXSZNZ+au109m2PFeV5IZ2Ctuz5dPv37YD4IHvS85dth/WbNSUg8+rG6f6hdX8k3hm5M1ONGw7Ku2HPGbktu3gX434e27TdvfWs5mAr5Hq/be/SuT5GOnCCeYBjeePBUS7i3EgD1c5KPqNIbRAstd8vJtt4ew/jxTFcYRGv0GLdRhF8V93haIDOjAV8jfByal0EnmfF2CePVEr9AAxYNz19qKmCi3CXBwjKPYAMRStsjovbalwvtGuGsZRoNwLUiYoX9pnywhphYrGEV72kfNMrbaBQ07SUHCmV+vChc13ZrTKorBvyxKlqbjrquw6gsbzBNle5pZSo7dJN0aZ9AYZ3qcbo0xI/lVd8W7tluStTZpavyRxshF2aXtEYjOe9CFMHMT4n5V5T9oPz9TCK4qHClMGUdh39hkpN6bSR5AJ6Upi2nZmJlljk7QjXZIs12jkGSZZrqGjmsJE+/yiH0N4TSLLGo1+5kKaYaqVSZkk2VQtkzJpsqlOmplI4lGnOQ3TTEQ5u9L3JDE0Tb59cU2CzQzVRJMm1ejVe6aXF+gVpyFPRPkVlOzHj94j/5lgWZP594jb0At//Og90ssLOb/ZTxH3pVXahJoR345SLofyBTHtqeFjhdKjVF+hrEBTaApzUJj+4PAa8WNEgIovrNCpd23SAhNehHrM6utRP3IESPnqlEjaAAAAAElFTkSuQmCC',
    facebook: '',
    telegram: '',
  },
  {
    name: 'Phung The Anh',
    role: 'Blockchain Developer',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXU1NT////R0dHV1dX09PTf39/8/Pzb29vu7u7x8fHl5eX5+fnc3Nzr6+vi4uLw8PCR9fa8AAAFQElEQVR4nO2d6ZKjMAyEjQzmSsj7v+2gMBnIHcCy2hl9Vbs/9qiaLtmSfDXOGYZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbIOI/n59D97z76MmXw/dsS2Z9tgNtf/VOf2DvCFXd20fimtC33a1yzyYU3Sq5lbcQmZTLf5ljlDd9E/lTfRNnXEgq/KNvImy0v5Bt0HVu/AtAlllF0dPh7J4Pv9uCUVZU1aTkVzzsboLTU6Jdc0AncloqNKxWDFCL4z/45iHRPKfZdBHlD4DjVSvD98ikPDF0VO1Qx9ToefUvQJHidoSXkJV2DNGmRCgU+r+CIJHsY4isChqbSHP8Fvq/CN61GSzvQ7eUmpLeQh3MtEA7G58pCxzoQJc9++uE0tC0JZzB61fLr2mQRunh8gCi+KgLekaKmOOUSaUWEGMm2YmoFobilcKZ5CCuHvJ9BigIIqEECiIPlrHfUuNUvaj18ILODUxajszg9PYyOQZBiTX0ElM4QlkmMqMUQZkmEplUgZjP6MTjGGnLY6hVkxgUbQIE5Fi7T89okdQ6AUFFoV+U+MF1r5LDgCNWyeqECDVRN1EvAdgW1Gs7Z4AaL4FezYGoG8TWv1eAFgFm0JTaAoBFEo23hCt9z+oh8Jdm75CN4gqHLTlCW4HTyBsCn/7+pDX+IL7NBBrfMlyEQCKheMlsFQQA8IC2P2H/VISnIcQg/Q/nFt8/dmT3NEMyMGM84JnwAgFn5E7x0fh2+9iOKlcA5NnnND5E0RP+kcVvXMLUCEUmYlIs3CEBO6XYin8B3eEKXJjEwBflMa+q4/Ht7+3YNa83n5FAH0zM7an0d494TSk11C0t2uYYzTGE9kJ5IeyUSRCvyHdLTGgC9z9EjgEtGbtDu/2vsfHnYN/7PJU0P7hP2NzdwPaydzjN3ubZBJCx+4fG/xpcnD9WMAeQ2so4XPoPcQ+WJ/k1cBeWPnp4+N3+tjri7K1bKP6+Nav7QjbZ3+Cd+QOp9eee5Rr+H7hwUrsm3gfvLarKd/heQP7XLL3ZdMyJ/a+/DKPzylSZ+dSOjuYum+JnWEYhmEYf0xlnr27L8x/lj+jDH/omrbvF9uMIfR923QH7zJXSZNZ+au109m2PFeV5IZ2Ctuz5dPv37YD4IHvS85dth/WbNSUg8+rG6f6hdX8k3hm5M1ONGw7Ku2HPGbktu3gX434e27TdvfWs5mAr5Hq/be/SuT5GOnCCeYBjeePBUS7i3EgD1c5KPqNIbRAstd8vJtt4ew/jxTFcYRGv0GLdRhF8V93haIDOjAV8jfByal0EnmfF2CePVEr9AAxYNz19qKmCi3CXBwjKPYAMRStsjovbalwvtGuGsZRoNwLUiYoX9pnywhphYrGEV72kfNMrbaBQ07SUHCmV+vChc13ZrTKorBvyxKlqbjrquw6gsbzBNle5pZSo7dJN0aZ9AYZ3qcbo0xI/lVd8W7tluStTZpavyRxshF2aXtEYjOe9CFMHMT4n5V5T9oPz9TCK4qHClMGUdh39hkpN6bSR5AJ6Upi2nZmJlljk7QjXZIs12jkGSZZrqGjmsJE+/yiH0N4TSLLGo1+5kKaYaqVSZkk2VQtkzJpsqlOmplI4lGnOQ3TTEQ5u9L3JDE0Tb59cU2CzQzVRJMm1ejVe6aXF+gVpyFPRPkVlOzHj94j/5lgWZP594jb0At//Og90ssLOb/ZTxH3pVXahJoR345SLofyBTHtqeFjhdKjVF+hrEBTaApzUJj+4PAa8WNEgIovrNCpd23SAhNehHrM6utRP3IESPnqlEjaAAAAAElFTkSuQmCC',
    facebook: '',
    telegram: '',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <div className="about-us">
          <h1 className='about-us-home'>About Us</h1>
          <svg className="title-line-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 9700 900"><path
            d="M302.86320663978927 212.14618524196896C308.3938488313583 210.2029835411226 325.8826336213973 198.84272861762003 336.04705978920333 200.48697503689084C346.21148595700936 202.13122145616165 355.4790589957463 223.65590509060178 363.8497636466252 222.01166375759396C372.2204682975041 220.36742242458615 379.0964016267684 191.81734307888303 386.27128769447677 190.62152703884396C393.44617376218514 189.4257109988049 397.48203954587655 217.22839959743771 406.8990800528752 214.8367675173596C416.31612055987387 212.44513543728146 435.29968684405355 179.5602273969169 442.77353073646896 176.27173455837521C450.2473746288843 172.9832417198336 447.55679235349373 188.97726027452103 451.7421434073674 195.1058104861096C455.9274944612411 201.23436069769815 461.30865646889083 214.53780206325803 467.88563705971114 213.04303582790646C474.46261765053146 211.5482695925549 478.9469265291122 198.8427438764091 491.20402695228927 186.13721307400021C503.4611273754663 173.43168227159134 533.0575374910263 145.0310780235445 541.4282395987736 136.80985101345334"
            fill="none"
            strokeWidth="18"
            stroke="url(#SvgjsLinearGradient1014)"
            strokeLinecap="round"
            transform="matrix(2.7720501897158254,0,0,2.7720501897158254,-758.9983293810534,-327.45974660271276)"/>
            <defs>
            <linearGradient id="SvgjsLinearGradient1014">
              <stop stopColor="hsl(37, 99%, 67%)" offset="0" />
              <stop stopColor="hsl(316, 73%, 52%)" offset="1" />
            </linearGradient>
            </defs>
          </svg>
          <p className="about-us-description">
          At HeritageChain, we are dedicated to revolutionizing the way personal legacies are managed and fulfilled. Our mission <br/>
          is to provide a secure, transparent, and immutable platform where individuals can confidently store and execute <br/>
          their personal instructions, wishes, and cultural heritage. We believe that everyone's legacy should be honored with <br/>
          precision and integrity, ensuring that their wishes are respected and their assets are distributed accurately and fairly. <br/>
          By leveraging the power of blockchain technology, we are building a future where personal legacies are protected and preserved <br/>
          for generations to come.
          </p>
        </div>
        <div className="about-hc">
          <div className="about-hc-text">
            <h1 className='about-hc-home'>About HeritageChain</h1>
            <p className="about-hc-description">
              HeritageChain is an innovative blockchain platform designed to safeguard personal legacies and cultural heritage.
              With HeritageChain, users can securely store their personal instructions and wishes, ensuring that they are immutable
              and executed with precision. <br/> Our platform empowers individuals to manage their legacies with confidence, knowing that
              their directives will be honored and their assets distributed transparently and fairly. HeritageChain is not
              just about preserving the past; it's about empowering the future by ensuring that everyone's wishes are respected
              and their legacies are carried out as intended.
            </p>
          </div>
          <img src="https://sunteco.vn/wp-content/uploads/2022/06/block-chain-use-case-1.png" className='about-hc-img' alt="" />
        </div>
        <div className="our-team">
          <h2 className="our-team__title">Our Team</h2>
          <p className='our-team__description'>We are impartial and independent, and every day we create distinctive, world-class programmes and develop</p>
          <div className="our-team__members">
            {teamMembers.map((member, index) => (
              <div className="our-team__member" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="our-team__member-image"
                />
                <h3 className="our-team__member-name">{member.name}</h3>
                <p className="our-team__member-role">{member.role}</p>
                <div className="our-team__member-icons">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                  </a>
                  <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className="icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
 ); 
};  

export default AboutUs;
