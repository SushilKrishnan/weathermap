import bg from "/home/user/weathermap/weathermap/src/img/8562848_25501.jpg";

export default function Main() {
        const styles = {
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
              };
        return (
                <div class="absolute top-0 left-0 -z-50 h-screen w-screen" style={styles}>
                        <div class="flex justify-center items-center h-screen">
                                <div class="bg-teal-500/75 p-4 rounded-lg shadow-md h-2/3 w-2/3">
                                        <h1 class="font-mono text-4xl font-bold text-black">Welcome to WeatherMap</h1>
                                        <br/>
                                        <h1 class="font-mono text-2xl text-black">Weather app utilizing India's first crowd-supported weather infrastructure Weather Union!</h1>
                                </div>
                        </div>
                        <div class='absolute bottom-0 w-full'>
                                <p class="text-center">Copyright &copy;2024 Sushil Krishnan. All Rights Reserved.</p>
                        </div>
                </div>
        )
}