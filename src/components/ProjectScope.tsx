import React from 'react';

const ProjectScope = () => {
  return (
    <section id="scope" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Project Scope
        </h2>

        <div className="max-w-4xl mx-auto space-y-12 text-justify">
          {/* Literature Survey */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] text-justify">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Literature Survey
            </h3>
            <p className="mb-4 text-gray-700">
              Corn seed quality is influenced by factors like mechanical damage,
              silk cut, and discoloration, all of which reduce germination and
              increase vulnerability during storage. Mechanical stress from
              improper handling and moisture imbalance causes damage, while silk
              cut and discoloration—often due to environmental stress and
              pathogens—lead to fungal infections and mycotoxin risks [1]. In
              soybeans, defects such as breakage, immaturity, skin damage, and
              spotting also impair viability. These are typically caused by
              harvesting stress, environmental conditions, or pathogen exposure.
              Deep learning techniques help identify these defects accurately,
              supporting better seed selection [2].
            </p>
            <p className="mb-4 text-gray-700">
              In rice, major diseases like brown spot (Bipolaris oryzae), leaf
              blast (Magnaporthe oryzae), and bacterial leaf blight (Xanthomonas
              oryzae pv. oryzae) significantly lower yields. Each disease has
              specific symptoms and thrives under particular environmental
              conditions, necessitating integrated control methods such as
              resistant varieties and proper field management [3].
            </p>
            <p className="mb-4 text-gray-700">
              Tomato and guava quality is assessed based on appearance and
              biochemical content. High-grade fruits result from good
              cultivation practices, while poor conditions lead to structural
              and nutritional defects [4].
            </p>
            <p className="mb-4 text-gray-700 ">
              Egg quality is affected by cracks and dirt, caused by weak shells,
              poor hygiene, or nutritional imbalances. These reduce safety and
              marketability, increasing contamination risk. Effective
              management—such as optimal feeding, sanitation, and genetic
              selection—is vital for maintaining quality [5].
            </p>
            <p className="mb-4 text-sm font-thin text-gray-700">
              [1]G. N. Odvody, N. Spencer, and J. Remmers, “A description of
              silk cut, a Stress-Related loss of kernel integrity in preharvest
              maize,” Plant Disease, vol. 81, no. 5, pp. 439–444, May 1997, doi:
              10.1094/pdis.1997.81.5.439.{" "}
            </p>
            <p className="mb-4 text-sm font-thin text-gray-700">
              [2]Y. Gulzar, “Enhancing soybean classification with modified
              inception model: A transfer learning approach,” Emirates Journal
              of Food and Agriculture, vol. 36, pp. 1–9, Apr. 2024, doi:
              10.3897/ejfa.2024.122928.
            </p>
            <p className="mb-4 text-sm font-thin text-gray-700">
              [3]Agbulos, Ma & Sarmiento, Yovito & Villaverde, Jocelyn. (2021).
              Identification of Leaf Blast and Brown Spot Diseases on Rice Leaf
              with YOLO Algorithm. 307-312. 10.1109/ICCSSE52761.2021.9545153.
            </p>
            <p className="mb-4 text-sm font-thin text-gray-700">
              [4]S. Bashir, “Remote area plant disease detection using image
              processing,” IOSR Journal of Electronics and Communication
              Engineering, vol. 2, no. 6, pp. 31–34, Jan. 2012, doi:
              10.9790/2834-0263134.[5]Jangid, Bhairu & Sharma, R.S.. (2023).
              Rice Disease Detection Using Deep Learning VGG-16 Model and Flask.
              10.55041/IJSREM17874.
            </p>
            <p className="mb-4 text-sm font-thin text-gray-700">
              [5]A. K. Singh, R. K. Singh, and S. K. Singh, "Tomato quality
              classification using deep learning: A review," Journal of
              Agricultural Informatics, vol. 12, no. 3, pp. 45-56, 2021.
            </p>
          </div>

          {/* Research Gap */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Research Gap
            </h3>
            <p className="mb-4 text-gray-700">
              Despite advances in agricultural AI, several gaps persist in
              existing research:
            </p>
            <ul className="mb-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Limited robust solutions for field-based diagnosis under varying
                environmental conditions
              </li>
              <li>
                Insufficient integration of multiple quality parameters in
                comprehensive assessment systems
              </li>
              <li>
                Lack of scalable solutions that work across different crop
                varieties and agricultural products
              </li>
              <li>
                Inadequate real-time processing capabilities for on-site
                agricultural applications
              </li>
              <li>
                Poor interpretability of AI models, limiting trust and adoption
                by farmers
              </li>
            </ul>
            <p className="text-gray-700">
              These gaps highlight the need for more versatile, robust, and
              interpretable AI systems for agricultural applications.
            </p>
          </div>

          {/* Research Problem & Solution */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Research Problem & Solution
            </h3>
            <div className="mb-4">
              <h4 className="mb-2 font-medium text-gray-800">Problem:</h4>
              <p className="text-gray-700">
                Traditional methods of agricultural quality assessment and
                disease diagnosis are labor-intensive, subjective, and often
                inaccurate, leading to crop losses and reduced market value.
                Current AI solutions lack the robustness and versatility needed
                for diverse agricultural environments.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium text-gray-800">Solution:</h4>
              <p className="text-gray-700">
                Our research proposes an integrated AI system that combines
                advanced computer vision with specialized neural network
                architectures to provide accurate, real-time diagnosis and
                quality assessment across multiple agricultural products. The
                solution incorporates adaptive learning mechanisms to handle
                environmental variations and a user-friendly interface
                accessible to farmers with varying technical expertise.
              </p>
            </div>
          </div>

          {/* Research Objectives */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Research Objectives
            </h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>
                Develop robust classification system for corn and soybean
                quality assessment that can identify pure, broken, discolored,
                and skin-damaged specimens with &gt;95% accuracy
              </li>
              <li>
                Create a comprehensive tomato and guava quality classification
                system capable of distinguishing between high, medium, and low
                quality with &gt;90% accuracy under variable lighting conditions
              </li>
              <li>
                Implement an accurate rice leaf disease identification system
                that can detect healthy leaves, bacterial blight, brown spot,
                and other common diseases with &gt;92% accuracy
              </li>
              <li>
                Design and validate an egg quality classification system to
                categorize white good eggs, brown good eggs, brown cracked eggs,
                white cracked eggs, and dirty eggs with &gt;94% accuracy
              </li>
              <li>
                Integrate all components into a unified, user-friendly system
                accessible via web devices for in-field use
              </li>
            </ol>
          </div>

          {/* Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Methodology
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium text-gray-800">
                  Data Collection & Preprocessing:
                </h4>
                <p className="text-gray-700">
                  Comprehensive datasets were created for each agricultural
                  product, capturing specimens under various conditions. Images
                  underwent preprocessing to normalize lighting, remove
                  background noise, and standardize dimensions for model
                  training.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-800">
                  Model Development:
                </h4>
                <p className="text-gray-700">
                  We employed transfer learning with state-of-the-art
                  convolutional neural networks (CNNs), fine-tuning
                  architectures like ResNet, MobileNet, and EfficientNet for
                  each specific classification task. Custom data augmentation
                  techniques were applied to improve model robustness.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-800">
                  Model Validation:
                </h4>
                <p className="text-gray-700">
                  Models underwent rigorous cross-validation using metrics
                  including accuracy, precision, recall, and F1-score.
                  Real-world testing was conducted in actual farm environments
                  to verify performance under practical conditions.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-800">
                  System Integration:
                </h4>
                <p className="text-gray-700">
                  Individual classification models were integrated into a
                  unified system with a common interface. Optimization
                  techniques were applied to enable real-time processing on
                  mobile devices with limited computational resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;