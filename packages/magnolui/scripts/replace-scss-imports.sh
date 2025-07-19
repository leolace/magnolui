# Troca todos os imports de ".scss" por ".css" nos arquivos da pasta dist
find ./dist -type f -name "*.js" | while read file; do
  sed -i 's/\.scss"/.css"/g' "$file"
  sed -i "s/\.scss'/.css'/g" "$file"
done