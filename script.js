const passwordInput = document.getElementById("passwordInput");
const sarcasmOutput = document.getElementById("sarcasmOutput");
const introMessage = document.getElementById("intro-message");
const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strengthMeterBar");

// Enhanced Sarcasm Messages (keeping your original ones)
const weakSarcasm = [
  "Seriously? My pet goldfish could crack this.",
  "This password is weaker than my WiFi signal.",
  "I've seen stronger passwords on sticky notes.",
  "Even a toddler could guess this one.",
  "This is basically an open invitation to hackers.",
  "Your password has the strength of wet paper.",
  "I'm not angry, just profoundly disappointed.",
  "Did you just smash your keyboard with your eyes closed?",
  "This password wouldn't stop a determined squirrel.",
  "You're one step away from using 'password123'.",
  "May the cybersecurity gods have mercy on your soul.",
  "This makes '123456' look sophisticated.",
  "I hope this isn't for anything important... like breathing.",
  "Are you actively trying to get hacked?",
  "This password has less security than a cardboard lock.",
  "Your password security is basically non-existent.",
  "I've seen more complexity in a children's coloring book.",
  "This password is so weak, it's practically transparent.",
  "You might as well just leave your account unlocked.",
  "This wouldn't fool a sleepy intern, let alone a hacker.",
  "Your password game is weaker than my morning coffee.",
  "This password has the structural integrity of a house of cards.",
  "I've seen more security on a public bathroom stall.",
  "This password is the digital equivalent of leaving your door wide open.",
  "You've created a password that hackers would use as a warm-up exercise.",
  "This is what happens when you let autocorrect create your password.",
  "Your password is so predictable, it should come with a fortune cookie.",
  "I'm pretty sure this password came free with your computer.",
  "This password is giving me secondhand embarrassment.",
  "You've somehow made 'password' look like a masterpiece.",
  "This password is weaker than a politician's promise.",
  "I've seen stronger security on a cereal box.",
  "Your password is basically a welcome mat for cybercriminals.",
  "This password screams 'please hack me' louder than a megaphone.",
  "You've created the password equivalent of a glass house.",
  "This password is so bad, it's actually impressive in its terribleness.",
  "Original. Truly groundbreaking.",
  "Do you sleepwalk through password creation too?",
  "Hackers love you too.",
  "Wow, how refreshingly predictable.",
  "This password has all the creativity of a brick wall.",
  "I'm impressed by your dedication to mediocrity."
];

const averageSarcasm = [
  "Getting warmer, but still not exactly Fort Knox.",
  "You're in the 'meh' zone of password security.",
  "It's like wearing a raincoat in a hurricane - better than nothing.",
  "This might slow down a lazy hacker for about 3 seconds.",
  "You're halfway to not being completely embarrassed.",
  "It's adequate, like a participation trophy.",
  "This password is the equivalent of a screen door on a submarine.",
  "You're trying, and that's... something, I guess.",
  "It's not terrible, but it's not winning any awards either.",
  "Your password has trust issues - it's not quite there yet.",
  "This is like bringing a water gun to a cyber war.",
  "You're in password purgatory - not great, not awful.",
  "It's giving 'decent effort' vibes.",
  "This password is like a lukewarm cup of coffee - functional but uninspiring.",
  "You're swimming in the shallow end of the security pool.",
  "This password is the digital equivalent of a speed bump.",
  "You're playing password limbo - how low can you go?",
  "This is what mediocrity looks like in password form.",
  "Your password is having an identity crisis - weak or strong?",
  "It's like a security guard who's half asleep on the job.",
  "This password is stuck in the friend zone of cybersecurity.",
  "You're riding the fence between disaster and decency.",
  "This password needs a pep talk and some vitamins.",
  "It's giving 'I tried but not that hard' energy.",
  "Your password is the beige of the security world.",
  "This is password vanilla - safe, boring, forgettable.",
  "You're in the Goldilocks zone of passwords - not too weak, not too strong.",
  "This password is like a diet soda - almost good, but not quite.",
  "Your security game is playing it safe... maybe too safe.",
  "This password is the equivalent of wearing socks with sandals."
];

const strongSarcasm = [
  "Finally! A password that doesn't make me weep.",
  "Now we're talking! This could actually stop someone.",
  "Look at you, being all responsible with your security.",
  "This password means business - I'm almost impressed.",
  "You've graduated from 'completely hopeless' to 'actually decent'.",
  "This might actually give hackers a mild headache.",
  "Bravo! You've discovered the art of not being terrible.",
  "This password has some real backbone to it.",
  "I feel like I can sleep peacefully knowing this exists.",
  "You've achieved password respectability - congratulations!",
  "This is what I call 'hacker-resistant' material.",
  "Finally, a password worthy of the name 'password'.",
  "You've leveled up from 'password peasant' to 'security citizen'.",
  "This password actually looks like it went to password boot camp.",
  "I can hear hackers sighing in frustration already.",
  "You've built a decent digital fortress here.",
  "This password has some actual muscle behind it.",
  "Now THIS is what I call putting in the effort!",
  "You've moved from the kiddie pool to the deep end of security.",
  "This password could probably bench press a small hacker.",
  "I'm getting strong 'I actually care about security' vibes.",
  "You've crafted something that won't make IT professionals cry.",
  "This password has graduated from password university with honors.",
  "Finally, a password that takes itself seriously.",
  "You've achieved the rare feat of not being a security liability.",
  "This is the password equivalent of a sturdy deadbolt.",
  "I'm genuinely impressed - you've created something worthwhile.",
  "This password could probably intimidate a script kiddie.",
  "You've reached the promised land of password competence."
];

const excellentSarcasm = [
  "Holy encryption, Batman! This is actually impressive.",
  "This password could probably stop a small army of hackers.",
  "You've reached password enlightenment - I'm genuinely proud.",
  "This is fortress-level security - well done!",
  "Even I'm a little intimidated by this password.",
  "This password has more layers than a security onion.",
  "You've officially made my day with this masterpiece.",
  "This is the password equivalent of a Swiss bank vault.",
  "I bow down to your superior password craftsmanship.",
  "This password is so strong, it probably lifts weights.",
  "You've transcended mere mortal password creation.",
  "This is what password perfection looks like!",
  "I'm not worthy of this password's presence.",
  "This password could probably get its own security clearance.",
  "You've created the Mona Lisa of password security.",
  "This password is so secure, it makes me feel safe just looking at it.",
  "I think I just witnessed password poetry in motion.",
  "This is the password that other passwords aspire to be.",
  "You've achieved password nirvana - congratulations!",
  "This password is tougher than a two-dollar steak.",
  "I'm genuinely emotional about how beautiful this password is.",
  "This password could probably run for president on a security platform.",
  "You've created something that would make encryption experts weep with joy.",
  "This is the password equivalent of a digital fortress with laser sharks.",
  "I'm pretty sure this password just intimidated my computer.",
  "This password is so strong, it probably has its own gravitational pull.",
  "You've achieved the impossible - a password that's both complex and elegant.",
  "This is what happens when someone actually reads the security guidelines.",
  "I'm nominating this password for the Cybersecurity Hall of Fame.",
  "This password is so secure, hackers are probably switching careers.",
  "You've created a password that would make a cryptographer cry happy tears.",
  "This is the password equivalent of a digital superhero.",
  "I'm convinced this password could probably solve world peace.",
  "You've reached the Mount Everest of password security.",
  "This password is so good, it deserves its own theme song."
];

// Highlight a random word in sarcasm
function highlightRandomWord(text) {
  const words = text.split(" ");
  const index = Math.floor(Math.random() * words.length);
  words[index] = `<span class="highlight-word">${words[index]}</span>`;
  return words.join(" ");
}

// COMPLETELY REWRITTEN - Modern, Accurate Password Strength Logic
function calculatePasswordStrength(password) {
  const length = password.length;
  
  // Character analysis
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);
  
  // Count quantities (important for advanced scoring)
  const upperCount = (password.match(/[A-Z]/g) || []).length;
  const numberCount = (password.match(/[0-9]/g) || []).length;
  const symbolCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;
  
  // Character variety count
  const charTypes = [hasLower, hasUpper, hasNumbers, hasSymbols].filter(Boolean).length;
  
  // CRITICAL WEAK CHECKS FIRST (these override everything)
  if (length < 4) return { score: 10, category: 'weak' };
  
  // Check for critically weak passwords
  const criticallyWeak = [
    'password', 'password1', 'password123', 'Password123',
    '123456', '123456789', '12345678', 'qwerty', 'qwerty123',
    'admin', 'admin123', 'welcome', 'welcome123', 'letmein',
    '111111', '000000', 'abc123', '123abc', 'monkey', 'dragon'
  ];
  
  if (criticallyWeak.some(weak => password.toLowerCase() === weak.toLowerCase())) {
    return { score: 15, category: 'weak' };
  }
  
  // MODERN POINT-BASED SYSTEM (0-10 points)
  let points = 0;
  
  // 1. LENGTH IS KING (most important factor - up to 4 points)
  if (length >= 8) points += 1;
  if (length >= 12) points += 1;
  if (length >= 16) points += 1;
  if (length >= 20) points += 1;
  
  // 2. CHARACTER VARIETY (up to 4 points)
  if (hasLower) points += 0.5;
  if (hasUpper) points += 1;
  if (hasNumbers) points += 1;
  if (hasSymbols) points += 1.5; // Symbols are most valuable
  
  // 3. QUANTITY BONUSES (up to 3 points)
  if (upperCount >= 2) points += 1;
  if (numberCount >= 2) points += 1;
  if (symbolCount >= 2) points += 1;
  
  // 4. ADVANCED BONUSES (up to 2 points)
  if (charTypes === 4) points += 1; // All character types
  if (length >= 14 && charTypes >= 3) points += 1; // Long + complex
  
  // 5. PATTERN PENALTIES (only for obvious weaknesses)
  if (/(.)\1{3,}/.test(password)) points -= 1; // 4+ repeated chars
  if (/123456|654321|abcdef|qwerty/i.test(password)) points -= 1; // Obvious sequences
  
  // Convert points to score and category
  points = Math.max(0, points); // Ensure no negative points
  
  let category, score;
  
  if (points >= 9) {
    category = 'excellent';
    score = 90 + (points - 9) * 10; // 90-100
  } else if (points >= 7) {
    category = 'strong'; 
    score = 70 + (points - 7) * 10; // 70-89
  } else if (points >= 4) {
    category = 'average';
    score = 40 + (points - 4) * 10; // 40-69
  } else {
    category = 'weak';
    score = points * 10; // 0-39
  }
  
  return { score: Math.min(score, 100), category, points };
}

// Simplified strength categories based on new logic
function getPasswordCategory(password) {
  const { category } = calculatePasswordStrength(password);
  return category;
}

// Update strength meter with enhanced visuals
function updateStrengthBar(password) {
  const { score, category } = calculatePasswordStrength(password);
  
  strengthBar.style.width = `${score}%`;
  
  // Color based on category for consistency
  switch (category) {
    case 'excellent':
      strengthBar.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
      break;
    case 'strong':
      strengthBar.style.background = 'linear-gradient(to right, #eab308, #ca8a04)';
      break;
    case 'average':
      strengthBar.style.background = 'linear-gradient(to right, #f97316, #ea580c)';
      break;
    default: // weak
      strengthBar.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
  }
}

// Get sarcasm based on category
function getSarcasticMessage(password) {
  const { score, category, points } = calculatePasswordStrength(password);
  
  // Debug logging (remove in production)
  console.log(`Password: "${password}"`);
  console.log(`Points: ${points}, Score: ${score}, Category: ${category}`);
  console.log('---');
  
  let messageArray;
  switch (category) {
    case 'excellent':
      messageArray = excellentSarcasm;
      break;
    case 'strong':
      messageArray = strongSarcasm;
      break;
    case 'average':
      messageArray = averageSarcasm;
      break;
    default:
      messageArray = weakSarcasm;
  }
  
  return getRandomMessage(messageArray);
}

function getRandomMessage(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Event listener for password input
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value.trim();

  if (value.length > 0) {
    // Hide intro message with smooth transition
    introMessage.style.opacity = "0";
    setTimeout(() => {
      introMessage.style.display = "none";
    }, 300);
  } else {
    // Show intro message
    introMessage.style.display = "block";
    setTimeout(() => {
      introMessage.style.opacity = "1";
    }, 10);
    sarcasmOutput.innerHTML = "";
    strengthBar.style.width = "0%";
    return;
  }

  const message = getSarcasticMessage(value);
  const { score } = calculatePasswordStrength(value);

  // VIBRATE on weak passwords
  if (score < 40 && navigator.vibrate) {
    navigator.vibrate(120);
  }

  // Smooth message transition
  sarcasmOutput.style.opacity = "0";
  setTimeout(() => {
    sarcasmOutput.innerHTML = highlightRandomWord(message);
    sarcasmOutput.style.opacity = "1";
  }, 100);

  updateStrengthBar(value);
});

// Toggle show/hide password
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});
