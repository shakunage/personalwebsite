export const portfoliodata = [
    {
        id: 5,
        title: "nhl-odds",
        tech: "Python, SQL, JavaScript",
        link: "",
        shortdesc: "Analysis of bookmaker efficiency across +10,000 NHL games",
        longdesc: "Details how a big dataset is gathered by webscraping, and then further analyzed using Python and SQL queries. Work still in progress."
    },
    {
        id: 4,
        title: "credit-risk-modeling",
        tech: "Python",
        link: "https://github.com/shakunage/credit-risk-modeling",
        shortdesc: "Using an ML-based approach for predicting credit defaults based on application data",
        longdesc: "Breaking down a small dataset of credit applications, then developing a model using the Decision Tree model found in the scikit-learn Python package. At first, some summary statistics are generated to get a grasp of the basic features of the dataset. Following that, the data is split into the feature matrix and target vector, and then, a 70:30 split is done for training and testing. After that, two decision tree models, a balanced and unbalanced one are generated, and these two models are then compared."
    },
    {
        id: 3,
        title: "telecom-churn",
        tech: "R",
        link: "https://github.com/shakunage/telecom-churn",
        shortdesc: "Predicting customer churn for a telecom",
        longdesc: "Running statistical tests and builiding a linear model based on training data to predict the churning of customers for a telecom. Some recommendations are made to improve customer retention."
    },
    {
        id: 2,
        title: "marketing-attribution-modeling",
        tech: "R",
        link: "https://github.com/shakunage/marketing-attribution-modeling",
        shortdesc: "Determining the most efficient marketing channels for a company",
        longdesc: "In the world of online marketing and advertising, it is typical that customers are exposed to and interact with several different marketing channels before the conversion, sale. This analysis, conducted using cleaned up data from Google Analytics, attempts to find out what the 'marketing journey' of the average customer is, while analyzing the cost efficiency of the channels as well."
    },
    {
        id: 1,
        title: "chimeiquiz",
        tech: "React, JavaScript",
        link: "https://github.com/shakunage/chimeiquiz",
        shortdesc: "Quiz about the place names in Ohnan, Shimane Prefecture.",
        longdesc: "A React web application in the form of a quiz about the place names in the town I had my JET Placement in,. The goal is to write the displayed kanji place name in its correct phonetic reading in Hiragana. A live version of this webapp is available here: https://shakunage.github.io/chimeiquiz/"
    }
]

export default portfoliodata;