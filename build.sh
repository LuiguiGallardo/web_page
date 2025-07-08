#!/bin/bash

# Build script for the modular resume website
# This script combines all partials into a single HTML file for deployment

echo "🚀 Building modular resume website..."

# Create build directory
mkdir -p build

# Copy static assets
cp -r assets build/
cp -r css build/
cp -r js build/
cp -r academic_cv_lmgb_2025 build/
cp -r cover_letter_2025 build/
cp -r cv_lmgb_2025_* build/
cp -r files build/
cp -r portfolio build/
cp CNAME build/ 2>/dev/null || true
cp LICENSE build/ 2>/dev/null || true

# Create a combined HTML file
cat > build/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Luigui Gallardo-Becerra - Bioinformatician and Molecular Biologist" />
    <meta name="author" content="Luigui Gallardo-Becerra" />
    <title>Luigui's Resume</title>
    <link rel="icon" type="image/x-icon" href="assets/img/clipart1619208.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
</head>

<body id="page-top">
EOF

# Append each partial to the combined file
cat partials/navigation.html >> build/index.html

echo '    <!-- Page Content-->' >> build/index.html
echo '    <div class="container-fluid p-0">' >> build/index.html

cat partials/about.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/experience.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/research_portfolio.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/apps.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/education.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/skills.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/interests.html >> build/index.html
echo '        <hr class="m-0" />' >> build/index.html

cat partials/awards.html >> build/index.html

echo '    </div>' >> build/index.html

# Add closing tags and scripts
cat >> build/index.html << 'EOF'

    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
</body>

</html>
EOF

echo "✅ Build complete! Files are ready in the 'build' directory."
echo "📁 You can deploy the contents of the 'build' directory to your web server."
echo "🌐 For GitHub Pages, you can copy the build contents to your repository root."
