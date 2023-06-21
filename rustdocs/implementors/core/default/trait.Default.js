(function() {var implementors = {
"linfa":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa/dataset/struct.Pr.html\" title=\"struct linfa::dataset::Pr\">Pr</a>"],["impl&lt;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa/composing/platt_scaling/struct.PlattParams.html\" title=\"struct linfa::composing::platt_scaling::PlattParams\">PlattParams</a>&lt;F, O&gt;"]],
"linfa_bayes":[["impl&lt;F: Float, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_bayes/struct.MultinomialNbParams.html\" title=\"struct linfa_bayes::MultinomialNbParams\">MultinomialNbParams</a>&lt;F, L&gt;"],["impl&lt;F: Float, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_bayes/struct.GaussianNbParams.html\" title=\"struct linfa_bayes::GaussianNbParams\">GaussianNbParams</a>&lt;F, L&gt;"]],
"linfa_elasticnet":[["impl&lt;F: Float, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;"]],
"linfa_hierarchical":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Float&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_hierarchical/struct.HierarchicalCluster.html\" title=\"struct linfa_hierarchical::HierarchicalCluster\">HierarchicalCluster</a>&lt;T&gt;"],["impl&lt;T: Float&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_hierarchical/struct.ValidHierarchicalCluster.html\" title=\"struct linfa_hierarchical::ValidHierarchicalCluster\">ValidHierarchicalCluster</a>&lt;T&gt;"]],
"linfa_ica":[["impl&lt;F: Float&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_ica/hyperparams/struct.FastIcaParams.html\" title=\"struct linfa_ica::hyperparams::FastIcaParams\">FastIcaParams</a>&lt;F&gt;"]],
"linfa_linear":[["impl&lt;F: Float&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_linear/struct.TweedieRegressorParams.html\" title=\"struct linfa_linear::TweedieRegressorParams\">TweedieRegressorParams</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_linear/struct.LinearRegression.html\" title=\"struct linfa_linear::LinearRegression\">LinearRegression</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_linear/struct.IsotonicRegression.html\" title=\"struct linfa_linear::IsotonicRegression\">IsotonicRegression</a>"]],
"linfa_nn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_nn/struct.KdTree.html\" title=\"struct linfa_nn::KdTree\">KdTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_nn/struct.BallTree.html\" title=\"struct linfa_nn::BallTree\">BallTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_nn/struct.LinearSearch.html\" title=\"struct linfa_nn::LinearSearch\">LinearSearch</a>"]],
"linfa_pls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_pls/struct.PlsSvdParams.html\" title=\"struct linfa_pls::PlsSvdParams\">PlsSvdParams</a>"]],
"linfa_preprocessing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_preprocessing/struct.CountVectorizerParams.html\" title=\"struct linfa_preprocessing::CountVectorizerParams\">CountVectorizerParams</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_preprocessing/tf_idf_vectorization/struct.TfIdfVectorizer.html\" title=\"struct linfa_preprocessing::tf_idf_vectorization::TfIdfVectorizer\">TfIdfVectorizer</a>"]],
"linfa_reduction":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_reduction/struct.DiffusionMapParams.html\" title=\"struct linfa_reduction::DiffusionMapParams\">DiffusionMapParams</a>"]],
"linfa_svm":[["impl&lt;F: Float, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_svm/hyperparams/struct.SvmParams.html\" title=\"struct linfa_svm::hyperparams::SvmParams\">SvmParams</a>&lt;F, L&gt;"]],
"linfa_trees":[["impl&lt;F: Float, L: Label&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_trees/struct.DecisionTreeParams.html\" title=\"struct linfa_trees::DecisionTreeParams\">DecisionTreeParams</a>&lt;F, L&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()