import Card from "./card"


function App() {
  
return (
    <>
    <nav>
    <h1 class="text-center text-6xl my-5 ">CARS FEEDBACK</h1>
    </nav>
    
      <div class="flex mx-8 my-8 justify-between	">
      <Card src="https://www.honda.com.pk/images/2021/08/civic-titanium.jpg" title= "Civic" Description ="this is not a very good car" price = "110$"/>
      <Card src="https://cdn.ferrari.com/cms/network/media/img/resize/6536530b123c1e0021062812-ferrari729151piufondo_1300x730" title= "Ferrari" Description ="this is  a very normal car" price = "110$"/>
      <Card src="https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black.jpg" title= "Alto" Description ="this car is very awesome" price = "110$"/>
      </div>
      <br /><br /><br />
      <div class="flex mx-8 my-8 justify-between	">
      <Card src="https://www.honda.com.pk/images/2021/08/civic-titanium.jpg" title= "Civic" Description ="this is not a very good car" price = "110$"/>
      <Card src="https://cdn.ferrari.com/cms/network/media/img/resize/6536530b123c1e0021062812-ferrari729151piufondo_1300x730" title= "Ferrari" Description ="this is  a very normal car" price = "110$"/>
      <Card src="https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black.jpg" title= "Alto" Description ="this car is very awesome" price = "110$"/>
      </div>
    </>
  )
}

export default App