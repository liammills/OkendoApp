import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import './styles/App.scss';
import NextButton from './components/NextButton';
import NumberPicker from './components/NumberPicker';
import ButtonPickers from './components/ButtonPickers';
import HeaderSteps from './components/HeaderSteps';

// Input Data

const productStandoutsOptions = [
  'Accurate Timekeeping',
  'High Quality',
  'Durable',
  'Elegant',
  'Good Weight',
  'Versatile',
  'Looks Expensive',
  'Attracts Compliments',
  'Unique',
  'Great Gift',
  'Great Value',
];

const ageRangeOptions = [
  'Under 18',
  '18 - 24',
  '25 - 34',
  '35 - 44',
  '45 - 54',
  '55 - 64',
  '65+',
];

const boughtForOptions = [
  'Personal Use',
  'Gift',
];

// Script

const App = () => {
  // const [quality, setQuality] = useState(0);
  // const [design, setDesign] = useState(0);
  // const [experience, setExperience] = useState(0);
  // const [standouts, setStandouts] = useState(null);
  const [age, setAge] = useState(null);
  // const [boughtFor, setBoughtFor] = useState(null);
  const [country, setCountry] = useState('Australia');

  return (
    <div>
      <div className="header">
        <img className="logo" src="../src/logo.png" alt="Mia Donna: The Eco Diamond" />
        <h2>1815 Rose Gold Chronograph Watch - Brown Croco Strap</h2>
        <h1>Ratings</h1>
      </div>
      <div className="centre-container">
        <HeaderSteps />
        <div className="main-container">
          <h4 className="subtitle">Quality</h4>
          <NumberPicker
            start="Poor"
            end="Excellent"
            num={5}
          />
          <h4 className="subtitle">Design</h4>
          <NumberPicker
            start="Poor"
            end="Excellent"
            num={5}
          />
          <h4 className="subtitle">Experience</h4>
          <NumberPicker
            start="Poor"
            end="Excellent"
            num={5}
          />
          <h4 className="subtitle">Product Standouts</h4>
          <h5 className="sub-subtitle">Choose up to 5 that best apply (optional)</h5>
          <ButtonPickers
            options={productStandoutsOptions}
            max={5}
          />
          <h4 className="subtitle bold break">About You</h4>
          <h4 className="subtitle">Age Range</h4>
          <h5 className="sub-subtitle">
            Choose
            <strong> one</strong>
          </h5>
          <ButtonPickers
            options={ageRangeOptions}
            max={1}
            target={age}
            onChange={(val) => setAge(val)}
          />
          <h4 className="subtitle">Bought For</h4>
          <h5 className="sub-subtitle">
            Choose
            <strong> one</strong>
          </h5>
          <ButtonPickers
            options={boughtForOptions}
            max={1}
          />
          <h4 className="subtitle">Country</h4>
          <CountryDropdown
            classes="countryPicker"
            value={country}
            onChange={(val) => setCountry(val)}
          />
        </div>
        <NextButton
          data={null}
        />
        {/* <NextButton data={[
          quality,
          design,
          experience,
          standouts,
          age,
          boughtFor,
          country]}
        /> */}
      </div>
    </div>
  );
};

export default hot(module)(App);
