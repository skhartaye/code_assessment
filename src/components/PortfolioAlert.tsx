import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function PortfolioAlert() {
  return (
    <div className="bg-blue-400 rounded-lg p-6 text-white flex justify-between items-start">
      <div className="flex-1">
        <p className="text-sm font-semibold mb-1">Summary of your portfolio</p>
        <h2 className="text-2xl font-bold mb-3">Monday 21 Jan</h2>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus non est aliquet semper. Vivamus viverra quis velit a suscipit. Aliquam blandit quam sagittis ex cursus lobortis. Pellentesque condimentum nisl sed.
        </p>
      </div>
      <div className="flex-shrink-0 ml-6">
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 via-red-400 to-purple-500 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl">🏠</div>
          </div>
        </div>
      </div>
    </div>
  );
}
