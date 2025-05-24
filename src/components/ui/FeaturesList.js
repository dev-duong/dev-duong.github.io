const FeaturesList = ({ features }) => (
  <ul className="list-disc list-inside space-y-1">
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
);

export default FeaturesList;
