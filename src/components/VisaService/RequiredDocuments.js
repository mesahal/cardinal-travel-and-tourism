import React from "react";

function RequiredDocuments({ title, requiredDocs, additionalDocs }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 bg-gray-100 p-3 rounded">
        {title}
      </h2>
      <ul className="space-y-3">
        {requiredDocs.map((doc, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>✔️</span>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
      {additionalDocs && additionalDocs.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Additional Documents:</h3>
          <ul className="space-y-3">
            {additionalDocs.map((doc, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>📌</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RequiredDocuments;
