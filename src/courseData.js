export const courseData = {
  "1": {
    "kicker": "Materi 01",
    "title": "Input, Masalah Input User, dan Konsep Validasi",
    "duration": "13 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 9,
    "endSeconds": 760,
    "bookmarks": [
      {
        "time": 9,
        "label": "Apa yang Akan Kita Pelajari? 🎯"
      },
      {
        "time": 60,
        "label": "Apa Itu Input? 📥"
      },
      {
        "time": 145,
        "label": "Input Pengguna Tidak Selalu Benar! 🤯"
      },
      {
        "time": 284,
        "label": "Apa Itu Validasi Input? 🚦"
      },
      {
        "time": 499,
        "label": "Apa Itu Sanitasi Input? 🧹"
      },
      {
        "time": 581,
        "label": ".strip() dan .lower() di Python 🐍"
      }
    ],
    "quizzes": [
      {
        "time": 256,
        "resume": false,
        "questions": [
          {
            "type": "info",
            "title": "Huruf Kapital itu Berbeda! ⚠️",
            "html": "\n              <div style=\"font-family: 'Outfit', sans-serif; text-align: center;\">\n                <style>\n                  @keyframes compareAnim {\n                    0%, 20% { content: '\"PEMASUKAN\" == \"pemasukan\"'; color: #1a1a1a; transform: scale(1); }\n                    40%, 60% { content: '\"PEMASUKAN\" != \"pemasukan\"'; color: #ff3333; transform: scale(1.1); }\n                    80%, 100% { content: 'FALSE ❌'; color: #ff3333; transform: scale(1.2); }\n                  }\n                  .compare-anim::after {\n                    content: '\"PEMASUKAN\" == \"pemasukan\"';\n                    display: inline-block;\n                    animation: compareAnim 5s infinite;\n                    font-weight: 900;\n                    font-size: 28px;\n                  }\n                </style>\n                <div style=\"display: inline-block; background-color: #ff3333; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #fff;\">Info Penting: Huruf Kapital itu Berbeda! ⚠️</h3>\n                </div>\n                <p style=\"font-size: 18px; font-weight: 600; text-align: left; background: #f0f0f0; padding: 16px; border-radius: 8px; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                  Bagi manusia, kata <strong>\"PEMASUKAN\"</strong> dan <strong>\"pemasukan\"</strong> artinya sama saja.<br><br>\n                  Tapi bagi Python, mereka adalah dua data yang <strong>sepenuhnya berbeda!</strong> Python sangat sensitif terhadap huruf besar dan kecil <i>(Case Sensitive)</i>.\n                </p>\n                <div style=\"margin: 30px 0; min-height: 50px;\" class=\"compare-anim\"></div>\n                <p style=\"font-size: 18px; font-weight: 800; color: #ff3333; border: 3px dashed #ff3333; padding: 12px; border-radius: 8px;\">\n                  Jika pengguna tak sengaja mengetik \"PEMASUKAN\", dan sistem mengecek <code style=\"background: #ffeb3b; padding: 4px 8px; border-radius: 4px;\">if input == \"pemasukan\"</code>, hasilnya pasti <strong>FALSE (Salah)</strong> dan akan ditolak! 🤯<br>Itulah kenapa kita harus menyeragamkan teksnya terlebih dahulu.\n                </p>\n              </div>\n            "
          }
        ]
      },
      {
        "time": 700,
        "resume": false,
        "questions": [
          {
            "type": "input",
            "title": "Mini Quiz: Sanitasi String 🧹",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #00c6ff; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Mini Quiz: Sanitasi String 🧹</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Ketik perintah Python yang tepat untuk mengecilkan semua huruf kapital dari input user:</p>\n                <p style=\"font-size: 14px; color: #555;\">(Petunjuk: Pastikan ada tanda titik (.) dan kurung () pada jawabanmu)</p>\n              </div>\n            ",
            "correct": ".lower()",
            "explanation": "Benar! .lower() mengubah semua teks menjadi huruf kecil."
          },
          {
            "type": "input",
            "title": "Mini Quiz: Hapus Spasi ✂️",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #00c6ff; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Mini Quiz: Hapus Spasi ✂️</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Lanjut! Apa perintah Python untuk menghapus spasi di depan dan di akhir sebuah teks?</p>\n                <p style=\"font-size: 14px; color: #555;\">(Petunjuk: Pastikan ada tanda titik (.) dan kurung () pada jawabanmu)</p>\n              </div>\n            ",
            "correct": ".strip()",
            "explanation": "Sempurna! .strip() akan menghapus sisa-sisa spasi tak terlihat di depan/belakang teks."
          }
        ]
      }
    ]
  },
  "2": {
    "kicker": "Materi 02",
    "title": "Sanitasi & Validasi Input dalam Program Keuangan",
    "duration": "14 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 761,
    "endSeconds": 1585,
    "bookmarks": [
      {
        "time": 761,
        "label": "Validasi Input Kosong 📭"
      },
      {
        "time": 918,
        "label": "Validasi Jenis Transaksi 🔄"
      },
      {
        "time": 1020,
        "label": "Kenapa Nominal Negatif Berbahaya? ⚠️"
      },
      {
        "time": 1268,
        "label": "Membuat Function clean_text 🧼"
      },
      {
        "time": 1415,
        "label": "Function validate_type & validate_amount ✅"
      },
      {
        "time": 1576,
        "label": "Kuis Sanitasi dan Validasi 🧠"
      }
    ],
    "quizzes": [
      {
        "time": 1077,
        "resume": false,
        "questions": [
          {
            "type": "info",
            "title": "Bahayanya Angka Negatif! ⚠️",
            "html": "\n              <div style=\"font-family: 'Outfit', sans-serif; text-align: center;\">\n                <style>\n                  @keyframes mathFail {\n                    0%, 20% { content: '1.000 - (-5.000)'; color: #1a1a1a; transform: scale(1); }\n                    40%, 60% { content: '1.000 + 5.000'; color: #ff3333; transform: scale(1.1); }\n                    80%, 100% { content: '= 6.000 😱'; color: #ff3333; transform: scale(1.2); }\n                  }\n                  .math-anim::after {\n                    content: '1.000 - (-5.000)';\n                    display: inline-block;\n                    animation: mathFail 5s infinite;\n                    font-weight: 900;\n                    font-size: 28px;\n                  }\n                </style>\n                <div style=\"display: inline-block; background-color: #ff3333; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #fff;\">Info Penting: Bahayanya Angka Negatif! ⚠️</h3>\n                </div>\n                <p style=\"font-size: 18px; font-weight: 600; text-align: left; background: #f0f0f0; padding: 16px; border-radius: 8px; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                  Bayangkan saldo awalmu <strong>Rp 1.000</strong>.<br><br>\n                  Lalu ada pengguna usil yang memasukkan pengeluaran <strong>-5.000</strong>.<br>\n                  Sistem akan menghitung: <code style=\"background: #ffeb3b; padding: 4px 8px; border-radius: 4px;\">Saldo = Saldo Awal - Pengeluaran</code>\n                </p>\n                <div style=\"margin: 30px 0; min-height: 50px;\" class=\"math-anim\"></div>\n                <p style=\"font-size: 18px; font-weight: 800; color: #ff3333; border: 3px dashed #ff3333; padding: 12px; border-radius: 8px;\">\n                  Aneh kan? Saldo malah bertambah jadi 6.000! 🤯<br>Kalian ingat pelajaran Matematika? <strong>Minus ketemu Minus jadinya Plus!</strong><br><br>Itulah kenapa kita HARUS memvalidasi angka agar tidak boleh kurang dari 0.\n                </p>\n              </div>\n            "
          }
        ]
      },
      {
        "time": 1583,
        "resume": false,
        "questions": [
          {
            "type": "input",
            "title": "Latihan: Lengkapi Function! 🧩",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Lengkapi Function! 🧩</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Ketik nama function yang tepat untuk melengkapi kode di bawah ini!</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">def</span> <span style=\"background-color: #ffe600; color: #1a1a1a; padding: 2px 10px; border-radius: 4px;\">_________________</span>(text):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> text.strip().lower()<br><br>\ncategory = clean_text(<span style=\"color: #f1fa8c;\">\"  PENGELUARAN  \"</span>)<br>\n<span style=\"color: #8be9fd;\">print</span>(category)\n                </div>\n              </div>\n            ",
            "correct": "clean_text",
            "explanation": "Tepat sekali! Nama function-nya adalah clean_text."
          },
          {
            "type": "input",
            "title": "Latihan: Lengkapi Method! 🧩",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Lengkapi Method! 🧩</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Bagus! Sekarang lengkapi baris return agar teks dibersihkan dari spasi berlebih dan diubah ke huruf kecil semua!</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #50fa7b;\">clean_text</span>(text):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> text<span style=\"background-color: #ffe600; color: #1a1a1a; padding: 2px 10px; border-radius: 4px;\">__________________</span><br><br>\ncategory = clean_text(<span style=\"color: #f1fa8c;\">\"  PENGELUARAN  \"</span>)<br>\n<span style=\"color: #8be9fd;\">print</span>(category)\n                </div>\n              </div>\n            ",
            "correct": [
              ".strip().lower()",
              ".lower().strip()"
            ],
            "explanation": "Kombinasi .strip().lower() atau .lower().strip() sama-sama bisa digunakan dan sangat berguna untuk membersihkan teks input dari pengguna."
          },
          {
            "type": "input",
            "title": "Latihan: Lengkapi Function `validate_amount` 🧩",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Lengkapi Function `validate_amount` 🧩</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Lengkapi function berikut agar nominal Rp0 atau negatif ditolak (mengembalikan nilai False):</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #50fa7b;\">validate_amount</span>(amount):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">if</span> amount <span style=\"background-color: #ffe600; color: #1a1a1a; padding: 2px 10px; border-radius: 4px;\">_________</span> 0:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> <span style=\"color: #bd93f9;\">False</span><br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">else</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> <span style=\"color: #bd93f9;\">True</span>\n                </div>\n              </div>\n            ",
            "correct": "<=",
            "explanation": "Benar sekali! Operator <= artinya 'kurang dari atau sama dengan', jadi angka minus dan nol akan ditolak."
          },
          {
            "type": "custom",
            "title": "Kuis Kilat: Sanitasi vs Validasi ⚖️",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Kuis Kilat: Manakah yang termasuk tindakan VALIDASI?</h3>\n                </div>\n              </div>\n            ",
            "choices": [
              "Mengubah input 'PENGELUARAN' menjadi 'pengeluaran'",
              "Memastikan nominal tidak boleh negatif (<= 0)",
              "Membuang spasi kosong di depan dan belakang kata"
            ],
            "correct": "Memastikan nominal tidak boleh negatif (<= 0)",
            "explanation": "Memastikan nominal negatif adalah pengecekan aturan (Validasi), sedangkan sisanya mengubah format data (Sanitasi)."
          }
        ]
      }
    ]
  },
  "3": {
    "kicker": "Mini Project",
    "title": "Safe Transaction Input",
    "duration": "2 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 1590,
    "endSeconds": 1695,
    "bookmarks": [],
    "quizzes": [
      {
        "time": 99999,
        "resume": false,
        "questions": [
          {
            "type": "pyscript",
            "title": "Mini Project: Safe Transaction Input 🛡️",
            "html": "<p style=\"font-size: 18px; margin-bottom: 10px;\">Buat program pencatat transaksi sederhana yang menolak input tidak valid.</p><div style=\"background-color: rgba(0, 198, 255, 0.15); border: 4px solid var(--black); padding: 25px; border-radius: 16px; box-shadow: 6px 6px 0px var(--black); margin: 20px 0;\"><h3 style=\"margin-bottom: 10px; font-size: 20px;\">Syarat:</h3><ul style=\"padding-left: 25px; font-size: 18px; line-height: 1.6;\"><li>Minta input nama transaksi, jenis transaksi, dan nominal.</li><li>Nama transaksi tidak boleh kosong.</li><li>Jenis transaksi hanya boleh <code>pemasukan</code> atau <code>pengeluaran</code>.</li><li>Nominal harus lebih dari 0.</li><li>Jika semua valid, tampilkan dictionary transaksi.</li></ul></div>",
            "initialCode": "def clean_text(text):\n    return text.strip().lower()\n\nname = input(\"Nama transaksi: \").strip()\ntransaction_type = clean_text(input(\"Jenis transaksi: \"))\namount = int(input(\"Nominal transaksi: \"))\n\n# Lengkapi validasi di bawah ini!\n",
            "expectedCode": "def clean_text(text):\n    return text.strip().lower()\n\nname = input(\"Nama transaksi: \").strip()\ntransaction_type = clean_text(input(\"Jenis transaksi: \"))\namount = int(input(\"Nominal transaksi: \"))\n\nif name == \"\":\n    print(\"Nama transaksi tidak boleh kosong.\")\nelif transaction_type != \"pemasukan\" and transaction_type != \"pengeluaran\":\n    print(\"Jenis transaksi harus pemasukan atau pengeluaran.\")\nelif amount <= 0:\n    print(\"Nominal harus lebih dari 0.\")\nelse:\n    transaction = {\"name\": name, \"type\": transaction_type, \"amount\": amount}\n    print(\"Transaksi valid:\", transaction)",
            "requiredCodeIncludes": [
              "if",
              "elif",
              "<=",
              "transaction"
            ],
            "successKeywords": [
              "Transaksi valid",
              "Snack",
              "pengeluaran",
              "10000"
            ]
          }
        ]
      }
    ]
  },
  "4": {
    "kicker": "Materi 03",
    "title": "Try-Except dan Debugging Program Python",
    "duration": "10 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 1714,
    "endSeconds": 2298,
    "bookmarks": [
      {
        "time": 1714,
        "label": "Ketika Program Python Error 🛑"
      },
      {
        "time": 1808,
        "label": "Tiga Jenis Error yang Sering Muncul 🐛"
      },
      {
        "time": 2027,
        "label": "Mengenal Penyelamat: try-except 🛡️"
      },
      {
        "time": 2137,
        "label": "Contoh Menangani ValueError 🧯"
      }
    ],
    "quizzes": [
      {
        "time": 1882,
        "resume": false,
        "questions": [
          {
            "type": "custom",
            "title": "Jenis Error yang Sering Muncul 🐛",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Jenis Error yang Sering Muncul 🐛</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Error (exception) di Python terjadi ketika kode melanggar aturan sistem saat berjalan.</p>\n                <table style=\"width: 100%; border-collapse: collapse; border: 4px solid #1a1a1a; box-shadow: 6px 6px 0px #1a1a1a; background: white; margin-bottom: 24px;\">\n                  <thead>\n                    <tr style=\"background-color: #ffe600; border-bottom: 4px solid #1a1a1a;\">\n                      <th style=\"padding: 15px; border-right: 4px solid #1a1a1a; font-size: 18px; font-weight: 900; width: 40%;\">Tipe Error</th>\n                      <th style=\"padding: 15px; font-size: 18px; font-weight: 900;\">Penyebabnya</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr style=\"border-bottom: 2px solid #1a1a1a;\">\n                      <td style=\"padding: 15px; border-right: 4px solid #1a1a1a; text-align: center;\">\n                        <div class=\"drop-zone\" data-expected=\"ValueError\" style=\"min-height: 50px; border: 3px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #fafafa;\">\n                          <span style=\"color: #aaa; font-weight: bold;\">Tarik ke sini</span>\n                        </div>\n                      </td>\n                      <td style=\"padding: 15px; font-weight: bold; font-size: 16px;\">Tipe data tidak bisa diubah secara paksa (misal: huruf diubah ke int).</td>\n                    </tr>\n                    <tr style=\"border-bottom: 2px solid #1a1a1a;\">\n                      <td style=\"padding: 15px; border-right: 4px solid #1a1a1a; text-align: center;\">\n                        <div class=\"drop-zone\" data-expected=\"TypeError\" style=\"min-height: 50px; border: 3px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #fafafa;\">\n                          <span style=\"color: #aaa; font-weight: bold;\">Tarik ke sini</span>\n                        </div>\n                      </td>\n                      <td style=\"padding: 15px; font-weight: bold; font-size: 16px;\">Melakukan operasi pada dua tipe data yang tidak cocok (misal: string + int).</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding: 15px; border-right: 4px solid #1a1a1a; text-align: center;\">\n                        <div class=\"drop-zone\" data-expected=\"ZeroDivisionError\" style=\"min-height: 50px; border: 3px dashed #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #fafafa;\">\n                          <span style=\"color: #aaa; font-weight: bold;\">Tarik ke sini</span>\n                        </div>\n                      </td>\n                      <td style=\"padding: 15px; font-weight: bold; font-size: 16px;\">Membagi suatu angka dengan angka 0.</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"drag-container\" style=\"display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;\">\n                  <div class=\"drag-item\" draggable=\"true\" data-type=\"ZeroDivisionError\" style=\"background-color: #00c6ff; padding: 10px 20px; border: 3px solid #1a1a1a; border-radius: 8px; font-weight: bold; font-family: 'Courier New', Courier, monospace; cursor: grab; box-shadow: 3px 3px 0px #1a1a1a;\">ZeroDivisionError</div>\n                  <div class=\"drag-item\" draggable=\"true\" data-type=\"ValueError\" style=\"background-color: #00c6ff; padding: 10px 20px; border: 3px solid #1a1a1a; border-radius: 8px; font-weight: bold; font-family: 'Courier New', Courier, monospace; cursor: grab; box-shadow: 3px 3px 0px #1a1a1a;\">ValueError</div>\n                  <div class=\"drag-item\" draggable=\"true\" data-type=\"TypeError\" style=\"background-color: #00c6ff; padding: 10px 20px; border: 3px solid #1a1a1a; border-radius: 8px; font-weight: bold; font-family: 'Courier New', Courier, monospace; cursor: grab; box-shadow: 3px 3px 0px #1a1a1a;\">TypeError</div>\n                </div>\n                <div style=\"text-align: center;\">\n                  <button id=\"check-drag-btn\" style=\"background-color: #50fa7b; padding: 12px 30px; border: 3px solid #1a1a1a; border-radius: 12px; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 4px 4px 0px #1a1a1a; transition: all 0.2s;\">Periksa Jawaban</button>\n                </div>\n                <div id=\"drag-feedback\" style=\"margin-top: 15px; font-weight: bold; font-size: 16px; text-align: center;\"></div>\n              </div>\n            "
          }
        ]
      },
      {
        "time": 2297,
        "resume": false,
        "questions": [
          {
            "type": "custom",
            "title": "Latihan: Tebak Jenis Error! 🕵️‍♂️",
            "html": "\n      <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n        <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n          <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Tebak Jenis Error! 🕵️‍♂️</h3>\n        </div>\n        <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Perhatikan baris kode Python berikut:</p>\n        <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n          <span style=\"color: #f8f8f2;\">number </span><span style=\"color: #ff79c6;\">=</span> <span style=\"color: #8be9fd;\">int</span>(<span style=\"color: #f1fa8c;\">\"abc\"</span>)\n        </div>\n        <div style=\"background-color: #00c6ff; padding: 8px 16px; border-radius: 8px; border: 3px solid #1a1a1a; display: inline-block; margin-bottom: 16px;\">\n          <h4 style=\"margin: 0; font-size: 18px; font-weight: 800; color: #1a1a1a;\">Jika baris di atas dijalankan, error jenis apa yang akan muncul?</h4>\n        </div>\n      </div>\n    ",
            "choices": [
              "ValueError 💥",
              "TypeError 💥",
              "ZeroDivisionError 💥"
            ],
            "correct": "ValueError 💥",
            "explanation": "Benar! Karena teks 'abc' tidak bisa diubah menjadi angka bulat, maka akan menghasilkan ValueError."
          },
          {
            "type": "input",
            "title": "Latihan: Lengkapi Blok `try-except` 🧩",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Lengkapi Blok `try-except` 🧩</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Ketik potongan kode yang harus mengisi bagian kuning di bawah ini:</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">try</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;amount <span style=\"color: #ff79c6;\">=</span> <span style=\"color: #8be9fd;\">int</span>(<span style=\"color: #8be9fd;\">input</span>(<span style=\"color: #f1fa8c;\">\"Nominal: \"</span>))<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #8be9fd;\">print</span>(amount)<br>\n<span style=\"color: #ff79c6;\">except</span> <span style=\"background-color: #ffe600; color: #1a1a1a; padding: 2px 10px; border-radius: 4px;\">____________________</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #8be9fd;\">print</span>(<span style=\"color: #f1fa8c;\">\"Nominal harus berupa angka.\"</span>)\n                </div>\n              </div>\n            ",
            "correct": [
              "ValueError",
              "valueerror"
            ],
            "explanation": "Benar! ValueError digunakan untuk menangkap error karena isi datanya tidak sesuai (misal: huruf diubah ke angka)."
          }
        ]
      }
    ]
  },
  "5": {
    "kicker": "Mini Project",
    "title": "Safe Input with Error Handling",
    "duration": "1 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 2301,
    "endSeconds": 2356,
    "bookmarks": [],
    "quizzes": [
      {
        "time": 2356,
        "resume": false,
        "questions": [
          {
            "type": "pyscript",
            "title": "Mini Project: Safe Input with Error Handling 🛡️",
            "html": "\n            <p style=\"font-size: 18px; margin-bottom: 10px;\">Sekarang, mari kita tingkatkan keamanan program pencatat transaksi dengan menambahkan penanganan error (try-except).</p>\n            <div style=\"background-color: rgba(0, 198, 255, 0.15); border: 4px solid var(--black); padding: 25px; border-radius: 16px; box-shadow: 6px 6px 0px var(--black); margin: 20px 0;\">\n              <h3 style=\"margin-bottom: 10px; font-size: 20px;\">Aturan Tambahan:</h3>\n              <ul style=\"padding-left: 25px; font-size: 18px; line-height: 1.6;\">\n                <li>Program harus tetap melakukan sanitasi spasi & lower.</li>\n                <li>Validasi nama (tidak boleh kosong) dan jenis (harus pemasukan/pengeluaran).</li>\n                <li><span style=\"background-color: #00c6ff; padding: 2px 6px; border-radius: 4px; font-weight: bold; border: 2px solid #1a1a1a;\">Gunakan try-except</span> saat mengambil input nominal transaksi agar program tidak crash ketika diisi huruf.</li>\n              </ul>\n            </div>\n          ",
            "initialCode": "def clean_text(text):\n    return text.strip().lower()\n\ndef validate_type(transaction_type):\n    transaction_type = clean_text(transaction_type)\n    return transaction_type == \"pemasukan\" or transaction_type == \"pengeluaran\"\n\ndef validate_amount(amount):\n    return amount > 0\n\nname = input(\"Nama transaksi: \").strip()\ntransaction_type = clean_text(input(\"Jenis transaksi: \"))\n\n# Tambahkan try-except di bawah ini!\namount = int(input(\"Nominal transaksi: \"))\nif name == \"\":\n    print(\"Nama transaksi tidak boleh kosong.\")\nelif not validate_type(transaction_type):\n    print(\"Jenis transaksi tidak valid.\")\nelif not validate_amount(amount):\n    print(\"Nominal harus lebih dari 0.\")\nelse:\n    transaction = {\"name\": name, \"type\": transaction_type, \"amount\": amount}\n    print(\"Transaksi berhasil disimpan:\", transaction)",
            "expectedCode": "def clean_text(text):\n    return text.strip().lower()\n\ndef validate_type(transaction_type):\n    transaction_type = clean_text(transaction_type)\n    return transaction_type == \"pemasukan\" or transaction_type == \"pengeluaran\"\n\ndef validate_amount(amount):\n    return amount > 0\n\nname = input(\"Nama transaksi: \").strip()\ntransaction_type = clean_text(input(\"Jenis transaksi: \"))\n\ntry:\n    amount = int(input(\"Nominal transaksi: \"))\n    if name == \"\":\n        print(\"Nama transaksi tidak boleh kosong.\")\n    elif not validate_type(transaction_type):\n        print(\"Jenis transaksi tidak valid.\")\n    elif not validate_amount(amount):\n        print(\"Nominal harus lebih dari 0.\")\n    else:\n        transaction = {\"name\": name, \"type\": transaction_type, \"amount\": amount}\n        print(\"Transaksi berhasil disimpan:\", transaction)\nexcept ValueError:\n    print(\"Nominal harus berupa angka.\")",
            "requiredCodeIncludes": [
              "try:",
              "except ValueError",
              "int(input"
            ],
            "successKeywords": [
              "Transaksi berhasil disimpan",
              "Snack",
              "pengeluaran",
              "10000"
            ]
          }
        ]
      }
    ]
  },
  "6": {
    "kicker": "Materi 04",
    "title": "Langkah Debugging Code",
    "duration": "10 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 2362,
    "endSeconds": 2949,
    "bookmarks": [
      {
        "time": 2362,
        "label": "Apa Itu Debugging? 🕵️‍♂️"
      },
      {
        "time": 2520,
        "label": "Rantai Function Program Belanja 🔗"
      },
      {
        "time": 2681,
        "label": "Function Saling Bergantung 🧩"
      },
      {
        "time": 2721,
        "label": "Langkah Debugging Step-by-Step ✅"
      },
      {
        "time": 2800,
        "label": "Debugging dengan print() 🖨️"
      }
    ],
    "quizzes": [
      {
        "time": 2948,
        "resume": false,
        "questions": [
          {
            "type": "custom",
            "title": "Latihan: Cari Sumber Bug 🔎",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"text-align: center; margin-bottom: 24px; margin-top: 10px;\">\n                  <span style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; font-size: 22px; font-weight: 800; color: #1a1a1a;\">LATIHAN</span>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Di bawah ini terdapat rantai function untuk menghitung harga akhir belanjaan:</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #00c6ff;\">get_total</span>(price, quantity):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> price + quantity<br><br>\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #00c6ff;\">get_discount</span>(total):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> total * <span style=\"color: #bd93f9;\">0.1</span><br><br>\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #00c6ff;\">get_final_price</span>(total, discount):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> total - discount\n                </div>\n                <div style=\"background-color: #00c6ff; padding: 8px 16px; border-radius: 8px; border: 3px solid #1a1a1a; display: inline-block; margin-bottom: 16px;\">\n                  <h4 style=\"margin: 0; font-size: 18px; font-weight: 800; color: #1a1a1a;\">Pertanyaan: Di function manakah bug tersebut berada?</h4>\n                </div>\n              </div>\n            ",
            "choices": [
              "get_total() ⚙️",
              "get_discount() ⚙️",
              "get_final_price() ⚙️"
            ],
            "correct": "get_total() ⚙️",
            "explanation": "Benar! Seharusnya total harga dihitung dengan perkalian (price * quantity), bukan pertambahan."
          },
          {
            "type": "input",
            "title": "Latihan: Perbaiki Nilai Diskon 🛠️",
            "html": "\n              <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                <div style=\"display: inline-block; background-color: #ffe600; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a; margin-bottom: 24px; margin-top: 10px;\">\n                  <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #1a1a1a;\">Latihan: Perbaiki Nilai Diskon 🛠️</h3>\n                </div>\n                <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Perhatikan fungsi diskon berikut yang salah menghitung diskon sebesar 10%:</p>\n                <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #ff79c6;\">def</span> <span style=\"color: #00c6ff;\">get_discount</span>(total):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #ff79c6;\">return</span> total * <span style=\"background-color: #ffe600; color: #1a1a1a; padding: 2px 6px; border-radius: 4px;\">10</span> <span style=\"color: #6272a4;\"># Diskon terlalu besar!</span>\n                </div>\n                <div style=\"background-color: #00c6ff; padding: 8px 16px; border-radius: 8px; border: 3px solid #1a1a1a; display: inline-block; margin-bottom: 16px;\">\n                  <h4 style=\"margin: 0; font-size: 18px; font-weight: 800; color: #1a1a1a;\">Ketik angka perkalian yang benar untuk mewakili diskon 10% (dalam desimal):</h4>\n                </div>\n              </div>\n            ",
            "correct": [
              "0.1",
              "0.10",
              ".1"
            ],
            "explanation": "Tepat sekali! Diskon 10% sama dengan 10/100 atau 0.1."
          }
        ]
      }
    ]
  },
  "7": {
    "kicker": "Mini Project",
    "title": "Debugging Program Belanja",
    "duration": "1 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 2959,
    "endSeconds": 2971,
    "bookmarks": [],
    "quizzes": [
      {
        "time": 99999,
        "resume": false,
        "questions": [
          {
            "type": "pyscript",
            "title": "Mini Project: Debugging Program Belanja 🛍️🕵️‍♂️",
            "html": "\n            <p style=\"font-size: 18px; margin-bottom: 10px;\">Temukan dan perbaiki semua bug dari program belanja berikut agar menghasilkan output yang benar:</p>\n            <div style=\"background-color: rgba(0, 198, 255, 0.15); border: 4px solid var(--black); padding: 25px; border-radius: 16px; box-shadow: 6px 6px 0px var(--black); margin: 20px 0;\">\n              <ul style=\"padding-left: 25px; font-size: 18px; line-height: 1.6; list-style: none;\">\n                <li style=\"margin-bottom: 10px;\"><span style=\"background-color: #00c6ff; padding: 2px 6px; border-radius: 4px; font-weight: bold; border: 2px solid #1a1a1a; margin-right: 10px;\">Target Bug 1:</span> Total belanja harus dikali (*), bukan ditambah (+).</li>\n                <li style=\"margin-bottom: 10px;\"><span style=\"background-color: #00c6ff; padding: 2px 6px; border-radius: 4px; font-weight: bold; border: 2px solid #1a1a1a; margin-right: 10px;\">Target Bug 2:</span> Nilai diskon member 10% harus dikali 0.1, bukan 10.</li>\n                <li><span style=\"background-color: #00c6ff; padding: 2px 6px; border-radius: 4px; font-weight: bold; border: 2px solid #1a1a1a; margin-right: 10px;\">Target Bug 3:</span> Harga akhir didapatkan dari total - discount, bukan sebaliknya.</li>\n              </ul>\n            </div>\n          ",
            "initialCode": "def get_total(price, quantity):\n    return price + quantity\n\ndef get_discount(total, member):\n    if member:\n        return total * 10\n    else:\n        return 0\n\ndef get_final_price(total, discount):\n    return discount - total",
            "expectedCode": "def get_total(price, quantity):\n    return price * quantity\n\ndef get_discount(total, member):\n    if member:\n        return total * 0.1\n    else:\n        return 0\n\ndef get_final_price(total, discount):\n    return total - discount",
            "validationTest": "print(get_total(30000, 2))\nprint(get_discount(60000, True))\nprint(get_final_price(60000, 6000))",
            "expectedOutput": "60000\n6000.0\n54000"
          }
        ]
      }
    ]
  },
  "8": {
    "kicker": "Materi 04",
    "title": "Dictionary dan List Transaksi",
    "duration": "15 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 3000,
    "endSeconds": 3893,
    "bookmarks": [
      {
        "time": 3000,
        "label": "Apa Itu Dictionary di Python? 📖"
      },
      {
        "time": 3200,
        "label": "Membuat Dictionary Transaksi 🧱"
      },
      {
        "time": 3414,
        "label": "List of Dictionaries 🗂️"
      },
      {
        "time": 3582,
        "label": "Menghitung Pemasukan dan Pengeluaran 🧮"
      },
      {
        "time": 3660,
        "label": "Menambahkan Transaksi Baru ➕"
      },
      {
        "time": 3830,
        "label": "Function untuk Merangkum Transaksi 📊"
      }
    ],
    "quizzes": [
      {
        "time": 3414,
        "resume": false,
        "questions": [
          {
            "type": "pyscript",
            "title": "Pemahaman: Dictionary & Keys 🔑",
            "html": "\n                  <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                    <p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a;\">Dictionary di Python dibungkus oleh kurung kurawal <code>{}</code> dan memiliki pasangan <strong>key</strong> dan <strong>value</strong>.</p>\n                    <p style=\"font-size: 16px; color: #1a1a1a; margin-bottom: 16px;\">Di bawah ini ada dictionary bernama <code>transaction</code>. Untuk mencetak nilainya, kita harus memanggil <strong>key</strong>-nya menggunakan kurung siku <code>[]</code>.</p>\n                    <div style=\"background-color: #00c6ff; padding: 10px 16px; border-radius: 8px; border: 3px solid #1a1a1a; display: inline-block; margin-bottom: 16px;\">\n                      <h4 style=\"margin: 0; font-size: 16px; font-weight: 800; color: #1a1a1a;\">Tugasmu: Ketik kode untuk mencetak isi dari key <code>\"name\"</code>, <code>\"type\"</code>, dan <code>\"amount\"</code> secara berurutan dengan fungsi <code>print()</code>!</h4>\n                    </div>\n                  </div>\n                ",
            "initialCode": "transaction = {\n    \"name\": \"Beli buku\",\n    \"type\": \"pengeluaran\",\n    \"amount\": 25000\n}\n\n# Tulis kode print() kamu di bawah ini!\n",
            "expectedCode": "transaction = {\n    \"name\": \"Beli buku\",\n    \"type\": \"pengeluaran\",\n    \"amount\": 25000\n}\n\nprint(transaction[\"name\"])\nprint(transaction[\"type\"])\nprint(transaction[\"amount\"])",
            "allowAnyOutput": true
          }
        ]
      },
      {
        "time": 3893,
        "resume": false,
        "questions": [
          {
            "type": "custom",
            "title": "Latihan: Data Structures 🧩",
            "html": "\n                  <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n                    <div style=\"text-align: center; margin-bottom: 24px; margin-top: 10px;\">\n                      <div style=\"display: inline-block; background-color: #00c6ff; padding: 10px 24px; border-radius: 12px; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0px #1a1a1a;\">\n                        <h3 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; text-shadow: 1px 1px 0 #1a1a1a, -1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a;\">DATA STRUCTURES</h3>\n                      </div>\n                      <div style=\"margin-top: -15px;\">\n                        <span style=\"display: inline-block; background-color: #ffe600; padding: 4px 16px; border-radius: 12px; border: 3px solid #1a1a1a; font-size: 14px; font-weight: 800; color: #1a1a1a;\">LATIHAN</span>\n                      </div>\n                    </div>\n                    <p style=\"font-weight: 800; font-size: 18px; color: #1a1a1a; margin-bottom: 16px;\">Perhatikan potongan kode berikut:</p>\n                    <div class=\"code-block\" style=\"background-color: #1a1a1a; padding: 24px; border-radius: 16px; font-family: 'Courier New', Courier, monospace; font-size: 16px; margin-bottom: 24px; border: 3px solid #ffe600; box-shadow: 4px 4px 0px #ffe600; color: #f8f8f2; line-height: 1.6; font-weight: bold; text-align: left;\">\n<span style=\"color: #f8f8f2;\">transaction = {</span><br>\n<span style=\"color: #f8f8f2;\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #50fa7b;\">\"name\"</span><span style=\"color: #f8f8f2;\">: </span><span style=\"color: #50fa7b;\">\"Beli snack\"</span><span style=\"color: #f8f8f2;\">,</span><br>\n<span style=\"color: #f8f8f2;\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #50fa7b;\">\"type\"</span><span style=\"color: #f8f8f2;\">: </span><span style=\"color: #50fa7b;\">\"pengeluaran\"</span><span style=\"color: #f8f8f2;\">,</span><br>\n<span style=\"color: #f8f8f2;\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #50fa7b;\">\"amount\"</span><span style=\"color: #f8f8f2;\">: </span><span style=\"color: #50fa7b;\">10000</span><br>\n<span style=\"color: #f8f8f2;\">}</span><br><br>\n<span style=\"color: #8be9fd;\">print</span><span style=\"color: #f8f8f2;\">(transaction[</span><span style=\"color: #50fa7b;\">\"amount\"</span><span style=\"color: #f8f8f2;\">])</span>\n                    </div>\n                    <div style=\"background-color: #00c6ff; padding: 8px 16px; border-radius: 8px; border: 3px solid #1a1a1a; display: inline-block; margin-bottom: 16px;\">\n                      <h4 style=\"margin: 0; font-size: 18px; font-weight: 800; color: #1a1a1a;\">Berapa nilai output yang dicetak oleh baris di atas?</h4>\n                    </div>\n                  </div>\n                ",
            "choices": [
              "\"Beli snack\" 💬",
              "\"pengeluaran\" 💬",
              "10000 🔢"
            ],
            "correct": "10000 🔢",
            "explanation": "Benar sekali! Karena kita mencetak data dengan key 'amount', maka outputnya adalah 10000."
          }
        ]
      }
    ]
  },
  "9": {
    "kicker": "Materi 05",
    "title": "Analisis Data Keuangan dengan Python",
    "duration": "9 Menit",
    "videoId": "pKYN1E60xtU",
    "startSeconds": 3931,
    "endSeconds": 4408,
    "bookmarks": [
      {
        "time": 3932,
        "label": "Mengapa Data Keuangan Perlu Dianalisis? 🔎"
      },
      {
        "time": 3960,
        "label": "Dataset Pengeluaran Bulanan 📝"
      },
      {
        "time": 4026,
        "label": "Menghitung Total dengan sum() ➕"
      },
      {
        "time": 4081,
        "label": "Mencari Terbesar dan Terkecil dengan max()/min() 📏"
      },
      {
        "time": 4153,
        "label": "Menghitung Rata-Rata dengan sum()/len() 📊"
      },
      {
        "time": 4264,
        "label": "Analisis Berdasarkan Kategori 📂"
      },
      {
        "time": 4421,
        "label": "Final Project Kehadiran 🏁"
      }
    ],
    "quizzes": [
      {
        "time": 4263,
        "resume": false,
        "questions": [
          {
            "type": "input",
            "title": "Perintah Python 🐍 (1/4)",
            "html": "\n          <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n            <p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 16px;\">Lengkapi tabel perintah Python berikut ini berdasarkan list <code>pengeluaran</code>:</p>\n            <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 16px; font-weight: 600; color: #1a1a1a;\">\n              <tr style=\"background-color: #00c6ff; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Fungsi</th>\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Perintah Python</th>\n              </tr>\n              <tr>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #fff;\">Menghitung Total</td>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #ffe600; font-family: monospace; font-weight: bold;\">...</td>\n              </tr>\n            </table>\n            <p style=\"font-size: 16px; font-weight: 800; color: #1a1a1a;\">Ketik perintah untuk <b>Menghitung Total</b> pada kotak di bawah:</p>\n          </div>\n        ",
            "correct": [
              "sum()",
              "sum(pengeluaran)",
              "sum( pengeluaran )"
            ],
            "explanation": "Benar! Gunakan sum(pengeluaran) untuk menghitung total."
          },
          {
            "type": "input",
            "title": "Perintah Python 🐍 (2/4)",
            "html": "\n          <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n            <p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 16px;\">Lengkapi tabel perintah Python berikut ini berdasarkan list <code>pengeluaran</code>:</p>\n            <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 16px; font-weight: 600; color: #1a1a1a;\">\n              <tr style=\"background-color: #00c6ff; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Fungsi</th>\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Perintah Python</th>\n              </tr>\n              <tr>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #fff;\">Mencari Nilai Terbesar</td>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #ffe600; font-family: monospace; font-weight: bold;\">...</td>\n              </tr>\n            </table>\n            <p style=\"font-size: 16px; font-weight: 800; color: #1a1a1a;\">Ketik perintah untuk <b>Mencari Nilai Terbesar</b> pada kotak di bawah:</p>\n          </div>\n        ",
            "correct": [
              "max()",
              "max(pengeluaran)",
              "max( pengeluaran )"
            ],
            "explanation": "Benar! Gunakan max(pengeluaran) untuk mencari nilai terbesar."
          },
          {
            "type": "input",
            "title": "Perintah Python 🐍 (3/4)",
            "html": "\n          <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n            <p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 16px;\">Lengkapi tabel perintah Python berikut ini berdasarkan list <code>pengeluaran</code>:</p>\n            <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 16px; font-weight: 600; color: #1a1a1a;\">\n              <tr style=\"background-color: #00c6ff; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Fungsi</th>\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Perintah Python</th>\n              </tr>\n              <tr>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #fff;\">Mencari Nilai Terkecil</td>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #ffe600; font-family: monospace; font-weight: bold;\">...</td>\n              </tr>\n            </table>\n            <p style=\"font-size: 16px; font-weight: 800; color: #1a1a1a;\">Ketik perintah untuk <b>Mencari Nilai Terkecil</b> pada kotak di bawah:</p>\n          </div>\n        ",
            "correct": [
              "min()",
              "min(pengeluaran)",
              "min( pengeluaran )"
            ],
            "explanation": "Benar! Gunakan min(pengeluaran) untuk mencari nilai terkecil."
          },
          {
            "type": "input",
            "title": "Perintah Python 🐍 (4/4)",
            "html": "\n          <div style=\"text-align: left; font-family: 'Outfit', sans-serif;\">\n            <p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 16px;\">Lengkapi tabel perintah Python berikut ini berdasarkan list <code>pengeluaran</code>:</p>\n            <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 16px; font-weight: 600; color: #1a1a1a;\">\n              <tr style=\"background-color: #00c6ff; color: #1a1a1a; border: 2px solid #1a1a1a;\">\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Fungsi</th>\n                <th style=\"padding: 10px; border: 2px solid #1a1a1a;\">Perintah Python</th>\n              </tr>\n              <tr>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #fff;\">Menghitung Rata-Rata</td>\n                <td style=\"padding: 10px; border: 2px solid #1a1a1a; background-color: #ffe600; font-family: monospace; font-weight: bold;\">...</td>\n              </tr>\n            </table>\n            <p style=\"font-size: 16px; font-weight: 800; color: #1a1a1a;\">Ketik perintah untuk <b>Menghitung Rata-Rata</b> pada kotak di bawah (gunakan simbol <code>/</code>):</p>\n          </div>\n        ",
            "correct": [
              "sum()/len()",
              "sum() / len()",
              "sum(pengeluaran)/len(pengeluaran)",
              "sum(pengeluaran) / len(pengeluaran)"
            ],
            "explanation": "Luar biasa! Rata-rata dihitung dengan membagi total (sum) dengan jumlah data (len)."
          }
        ]
      },
      {
        "time": 4406,
        "resume": false,
        "questions": [
          {
            "type": "pyscript",
            "title": "Perintah Python 🐍 (1/4)",
            "html": "<div style=\"text-align: left; font-family: 'Outfit', sans-serif;\"><p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a;\">Ketik kode Python untuk menghitung <b>Total Pengeluaran</b> dari list di bawah ini!</p></div>",
            "initialCode": "pengeluaran = [30000, 5000, 20000, 25000]\n\n# Ganti titik-titik dengan kode yang benar\nprint( ... )",
            "expectedOutput": "80000"
          },
          {
            "type": "pyscript",
            "title": "Perintah Python 🐍 (2/4)",
            "html": "<div style=\"text-align: left; font-family: 'Outfit', sans-serif;\"><p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a;\">Ketik kode Python untuk mencari nilai <b>Pengeluaran Terbesar</b>!</p></div>",
            "initialCode": "pengeluaran = [30000, 5000, 20000, 25000]\n\n# Ganti titik-titik dengan kode yang benar\nprint( ... )",
            "expectedOutput": "30000"
          },
          {
            "type": "pyscript",
            "title": "Perintah Python 🐍 (3/4)",
            "html": "<div style=\"text-align: left; font-family: 'Outfit', sans-serif;\"><p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a;\">Ketik kode Python untuk mencari nilai <b>Pengeluaran Terkecil</b>!</p></div>",
            "initialCode": "pengeluaran = [30000, 5000, 20000, 25000]\n\n# Ganti titik-titik dengan kode yang benar\nprint( ... )",
            "expectedOutput": "5000"
          },
          {
            "type": "pyscript",
            "title": "Perintah Python 🐍 (4/4)",
            "html": "<div style=\"text-align: left; font-family: 'Outfit', sans-serif;\"><p style=\"font-size: 18px; font-weight: 800; color: #1a1a1a;\">Bagaimana kode untuk menghitung <b>Rata-Rata</b> dari list tersebut? (Gunakan operator pembagian <code>/</code>)</p></div>",
            "initialCode": "pengeluaran = [30000, 5000, 20000, 25000]\n\n# Ganti titik-titik dengan kode yang benar\nprint( ... )",
            "expectedOutput": "20000.0"
          }
        ]
      }
    ],
    "skipSegments": [
      {
        "start": 4387,
        "end": 4400
      }
    ]
  }
};
