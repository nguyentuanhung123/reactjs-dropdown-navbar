# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Lưu ý về flex

```jsx
<div className='flex flex-col h-20'>
    <button className='bg-[#e52424f4]'>Delele</button>
    <h1 className='bg-[#27e524f4]'>Edit</h1>
</div>
```
- Khi thẻ cha có flex thì các thẻ con sẽ có chiều cao bằng 100% thẻ cha, nhưng text bên trong thẻ h1 sẽ bị đẩy lên trên cùng
- Sau khi thẻ cha thêm flex-col thì những thằng con sẽ có chiều dài bằng với thẻ cha và sẽ một khoản trắng thừa bên dưới thằng con cuối

```jsx
<div className='flex items-center h-20'>
    <button className='bg-[#e52424f4]'>Delele</button>
    <h1 className='bg-[#27e524f4]'>Edit</h1>
</div>
```

- Sau khi thêm items-center các thằng con đều có chiều cao phụ thuộc vào nội dung bên trong và sẽ có khoảng trắng ở trên và dưới
- Chúng sẽ nằm ở chính giữa dựa theo chiều dọc


