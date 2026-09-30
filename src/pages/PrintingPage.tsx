import React, { useState } from 'react';

interface PrintingPageProps {
  onNavigate: (path: string) => void;
}

export const PrintingPage: React.FC<PrintingPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState('CAD Model Provided');
  const [modelLink, setModelLink] = useState('');

  // Specs State
  const [material, setMaterial] = useState('PLA+');
  const [color, setColor] = useState('Matte Black');
  const [quality, setQuality] = useState('Standard (0.20mm)');
  const [infill, setInfill] = useState(20);
  const [weight, setWeight] = useState(65);

  // Material rates in BDT per gram
  const materialRates: Record<string, number> = {
    'PLA+': 6.0,
    PETG: 7.5,
    ABS: 8.5,
    TPU: 10.5,
    'Carbon Fiber PLA': 14.0,
  };

  const currentRate = materialRates[material] || 6.0;
  const setupFee = 80; // BDT
  const estimatedCost = Math.round(weight * currentRate + setupFee);
  const estimatedUSD = (estimatedCost / 120).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="printing-container min-h-screen">
        {/* Left Side: Dark Hero */}
        <div className="printing-left text-white relative flex flex-col justify-center items-center p-8 sm:p-12">
          {/* Back button */}
          <div className="home-btn absolute top-6 left-6 z-20">
            <button
              onClick={() => onNavigate('/')}
              className="text-slate-300 hover:text-white flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer"
            >
              <i className="fas fa-arrow-left" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="relative z-10 text-center max-w-md w-full my-auto">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
              <i className="fas fa-cube" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              3D Prototyping <span className="text-indigo-400">Lab.</span>
            </h1>

            <h2 className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Rapid prototyping &amp; precision 3D print fabrication for makers, engineering students,
              and DIY builders near Daffodil Smart City &amp; Dhaka.
            </h2>

            {/* Hardware badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                  <i className="fas fa-bolt" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Bambu Lab A1 High-Speed Production</h4>
                  <p className="text-[11px] text-slate-400">Sub-0.08mm layer tolerance &amp; multi-color AMS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">
                  <i className="fas fa-clock" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Rapid Same-Day / Next-Day Turnaround</h4>
                  <p className="text-[11px] text-slate-400">Campus pick-up at DIU &amp; courier across Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive 3-Step Quotation & Order Form */}
        <div className="printing-right p-6 sm:p-12 flex justify-center items-center bg-slate-50 overflow-y-auto">
          <div className="max-w-xl w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Print Specifications
                </h3>
                <div className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
                  Step {step} of 3
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                Please provide your details and technical fabrication requirements.
              </p>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                    <i className="fas fa-check" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Print Inquiry Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{fullName || 'Maker'}</strong>. Bapi Debnath has received your 3D
                    prototype specs. We will inspect your model geometry and reach out via SMS/WhatsApp
                    at <strong>{phone || 'your phone number'}</strong> within 2 hours.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs space-y-1.5 border border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material:</span>
                      <span className="font-bold text-slate-800">{material} ({color})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Weight:</span>
                      <span className="font-bold text-slate-800">{weight} grams</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Total:</span>
                      <span className="font-bold text-indigo-600">~{estimatedCost} BDT (${estimatedUSD})</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                  >
                    Start Another Quote
                  </button>
                </div>
              ) : (
                <>
                  {/* Step 1: Contact & Project Info */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Your Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number (For WhatsApp / SMS Updates) *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="01XXXXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          What do you have?
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="orderType"
                              checked={orderType === 'CAD Model Provided'}
                              onChange={() => setOrderType('CAD Model Provided')}
                              className="text-indigo-600"
                            />
                            I have a 3D Model (.STL / Drive Link)
                          </label>
                          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="orderType"
                              checked={orderType === 'Need CAD Design'}
                              onChange={() => setOrderType('Need CAD Design')}
                              className="text-indigo-600"
                            />
                            I need custom CAD modeling
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          {orderType === 'CAD Model Provided'
                            ? '3D Model Link (Google Drive / Dropbox / Thingiverse)'
                            : 'Project Description & Approximate Dimensions (mm)'}
                        </label>
                        <input
                          required
                          type="text"
                          placeholder={
                            orderType === 'CAD Model Provided'
                              ? 'https://drive.google.com/file/...'
                              : 'e.g. Raspberry Pi Case, 95mm x 65mm x 30mm'
                          }
                          value={modelLink}
                          onChange={(e) => setModelLink(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            if (!fullName || !email || !phone) {
                              alert('Please fill in your name, email, and phone number.');
                              return;
                            }
                            setStep(2);
                          }}
                          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
                        >
                          <span>Next: Material &amp; Quality</span>
                          <i className="fas fa-arrow-right text-xs" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Material & Quality Selection */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Select Material
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {['PLA+', 'PETG', 'ABS', 'TPU', 'Carbon Fiber PLA'].map((mat) => (
                            <button
                              key={mat}
                              type="button"
                              onClick={() => setMaterial(mat)}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                                material === mat
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <div>{mat}</div>
                              <div className="text-[10px] text-slate-500 font-normal">
                                {materialRates[mat]} BDT / g
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Color
                          </label>
                          <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none"
                          >
                            <option>Matte Black</option>
                            <option>Snow White</option>
                            <option>Space Grey</option>
                            <option>Signal Red</option>
                            <option>Electric Blue</option>
                            <option>Industrial Orange</option>
                            <option>Silk Gold</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Layer Resolution
                          </label>
                          <select
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none"
                          >
                            <option>Standard (0.20mm)</option>
                            <option>Fine Detail (0.12mm)</option>
                            <option>Ultra Fine (0.08mm)</option>
                            <option>Draft Speed (0.28mm)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Infill Density: {infill}%
                          </label>
                          <span className="text-[11px] text-slate-400">
                            {infill < 30 ? 'Standard Strength' : infill < 70 ? 'High Strength' : 'Solid / Structural'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="100"
                          step="5"
                          value={infill}
                          onChange={(e) => setInfill(Number(e.target.value))}
                          className="w-full accent-indigo-600 cursor-pointer"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
                        >
                          <span>Next: Instant Quotation</span>
                          <i className="fas fa-arrow-right text-xs" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Weight Estimator & Instant Price Quote */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-bold text-slate-700">
                            Estimated Part Weight (Grams):
                          </label>
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              min="5"
                              max="3000"
                              value={weight}
                              onChange={(e) => setWeight(Math.max(5, Number(e.target.value)))}
                              className="w-20 px-2 py-1 text-center font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg text-sm"
                            />
                            <span className="text-xs font-bold text-slate-500">g</span>
                          </div>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="500"
                          value={weight}
                          onChange={(e) => setWeight(Number(e.target.value))}
                          className="w-full accent-indigo-600 cursor-pointer"
                        />
                        <p className="text-[11px] text-slate-400 mt-1">
                          Tip: Standard smartphone cases weigh ~30g; enclosure boxes weigh ~60-120g.
                        </p>
                      </div>

                      {/* Quotation Summary Card */}
                      <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                          <span>Material ({material})</span>
                          <span>{weight}g × {currentRate} BDT = {Math.round(weight * currentRate)} BDT</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                          <span>Bed Preparation &amp; Slicing</span>
                          <span>{setupFee} BDT</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <div>
                            <span className="text-xs text-slate-400 block">Total Estimated Price</span>
                            <span className="text-2xl font-black text-emerald-400">
                              {estimatedCost} BDT
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-400">
                            approx. ${estimatedUSD} USD
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-full transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer"
                        >
                          <i className="fas fa-paper-plane text-xs" />
                          <span>Submit Print Inquiry</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
