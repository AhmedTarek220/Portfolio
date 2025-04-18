import { useEffect, useState } from 'react';
import './Header.css'

function Header() {
    const [model , setModel] = useState(false); // لإظهار/إخفاء القائمة عند الضغط على الزر
    const [mode , setMode] = useState(localStorage.getItem('currentmode')?? 'dark')
    useEffect(()=>{
            if(mode === 'light'){
                document.body.classList.remove('dark')
                document.body.classList.add('light')
            }else{
                document.body.classList.remove('light')
                document.body.classList.add('dark')
            }
    },[mode])
    return (
        <header>
            <h2>Ahmed</h2>
            <nav>
                <ul className='showen'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Speaking</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            {/* زر الهامبرغر لفتح القائمة */}
            <button onClick={() => setModel(true)} className='menu'>   
                <i className="fas fa-bars"></i>
            </button>

            {/* زر الوضع المظلم */}
            <button className='mode' onClick={()=>{
                localStorage.setItem('currentmode',mode==='dark'?'light':'dark')
                setMode(localStorage.getItem('currentmode'))
            }
            }>
                {mode === 'dark'?<i className="fas fa-moon"></i>:<i className="fas fa-sun"></i>}

            </button>

            {/* عند الضغط على menu تظهر القائمة */}
            {model && (
                <div className="fixed">
                    <ul className='hidden'>
                        {/* زر الإغلاق داخل القائمة لإخفاء القائمة */}
                        <li><button onClick={() => setModel(false)}><i className="fas fa-times"></i></button></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Speaking</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;
