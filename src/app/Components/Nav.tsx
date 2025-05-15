import Image from "next/image";
import '../globals.css';

export default function Nav (){
    return (
        <>
     <div className="menu">
        <header>
            <div className="logo">
                <h1>MOMENTS</h1>
            </div>
            <nav>
                <ul>
                    <li><a href=""> Home </a></li>
                    <li><a href=""> Gallery </a></li>
                    <li><a href=""> Blog </a></li>
                    <li><a href=""> Chat </a></li>
                    <li><a href=""> Login </a></li>
                </ul>
            </nav>
        </header>
        <h1 className="welcome" > Registre uma vez! </h1>
        <h2 className="sub-come"> Lembre para sembre...</h2>
     </div>
        </>
    );

}
