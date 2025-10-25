var svgImages = document.querySelectorAll(".side.active .eff");
            changeSvgImageColor(svgImages, "#ffffff");

function changeSvgImageColor(svgImages, svgColor, defaultColor = "#1E293B") {
            svgImages.forEach(function(svgImage) {
                var svgPath = svgImage.getAttribute("src");
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var svgContent = xhr.responseText;

                        const strokeRegex = new RegExp(stroke="${defaultColor}", 'g');
                        const fillRegex = new RegExp(fill="${defaultColor}", 'g');

                        svgContent = svgContent.replace(strokeRegex, stroke="${svgColor}");
                        svgContent = svgContent.replace(fillRegex, fill="${svgColor}");

                        svgImage.src ="data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgContent);
                    }
                };
                xhr.open("GET", svgPath, true);
                xhr.send();
            });
        }