
// import { Link } from 'react-router-dom';
// import LogoImage from '../../assets/logo-chargeup.png'; 

// const Logo = () => {
//   return (
//     <Link to="/" className="flex items-center space-x-2">
//       <img 
//         src={LogoImage} 
//         alt="ChargeUp Logo" 
//         className="h-16  w-auto"
//       />
//     </Link>
//   );
// };

// export default Logo;
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo-chargeup.png'; 

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src={LogoImage} 
        alt="ChargeUp Logo" 
        className="h-16 w-auto"
      />
    </Link>
  );
};

export default Logo;

