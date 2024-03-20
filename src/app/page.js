// import Image from "next/image";
// import nextImage from "../assets/nextjsImage.png";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  // console.log(shoes);
  return (
    <div>
      <h1 className="text-center text-4xl mt-2">
        Welcome To Next JS Home Page
      </h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 4).map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">${shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <h1 className="text-center text-4xl mt-2">
Regular Image Optimization With Next JS.
</h1>
<img
src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png"
alt="next Image"
width={500}
height={500}
className="mx-auto"
/>
<h1 className="text-center text-4xl mt-2">
Image Optimization With Next JS.
</h1>
<Image
src={nextImage}
alt="Next-Image"
width={500}
height={500}
className="mx-auto"
/> */
}
