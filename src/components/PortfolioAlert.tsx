export default function PortfolioAlert() {
  return (
    <div className="bg-blue-400 p-6 text-white flex justify-between items-start border border-blue-500">
      <div className="flex-1">
        <p className="text-sm font-semibold mb-1">Summary of your portfolio</p>
        <h2 className="text-2xl font-bold mb-3">Monday 21 Jan</h2>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus non est aliquet semper. Vivamus viverra quis velit a suscipit. Aliquam blandit quam sagittis ex cursus lobortis. Pellentesque condimentum nisl sed.
        </p>
      </div>
      <div className="flex-shrink-0 ml-6">
        <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
          {/* House */}
          <g>
            {/* House body */}
            <rect x="30" y="50" width="68" height="60" fill="#6B9BD1" stroke="#333" strokeWidth="2"/>
            {/* Roof */}
            <polygon points="30,50 64,20 98,50" fill="#4A5F8F" stroke="#333" strokeWidth="2"/>
            {/* Door */}
            <rect x="55" y="75" width="18" height="35" fill="#8B6F47" stroke="#333" strokeWidth="2"/>
            {/* Door handle */}
            <circle cx="71" cy="92" r="2" fill="#FFD700"/>
            {/* Windows */}
            <rect x="40" y="60" width="12" height="12" fill="#87CEEB" stroke="#333" strokeWidth="1"/>
            <rect x="76" y="60" width="12" height="12" fill="#87CEEB" stroke="#333" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    </div>
  );
}
