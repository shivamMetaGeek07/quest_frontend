import NavBartest from "../components/testing/navbar";
import  TrapeziumWrapper from "../components/cards/trapezium";


const testing=()=>{

    return(
        <div className="min-h-screen ">
            <NavBartest/>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="relative w-72 h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630')" }}>
                    <div className="absolute w-1/3 h-1/4 bg-black clip-trapezium-bottom-left"></div>
                    <div className="absolute w-1/3 h-1/4 bg-black clip-trapezium-bottom-right"></div>
                </div>    
                <div className="relative bg-violet-800 w-72 h-48">
                    <div className="realtive h-1/4 bg-black flex ">
                    <div className="absolute w-1/3 h-1/4 bg-violet-800 clip-trapezium-top-left"></div>
                    <div className="absolute w-1/3 h-1/4 bg-violet-800 clip-trapezium-top-right"></div>
                    </div>
                    <div className="h-3/4"></div>
                </div>
            </div>
            
        </div>
    );
}

export default testing;