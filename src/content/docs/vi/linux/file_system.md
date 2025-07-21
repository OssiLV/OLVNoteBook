---
title: File System
description: File System
lastUpdated: false
prev:
  link: /prev-page/
  label: Prev page
next:
  link: /next-page/
  label: Next page
---

## 🔹 1. File System là gì?

-   **File System (Hệ thống tệp)** là cách hệ điều hành **lưu trữ, sắp xếp và truy xuất dữ liệu trên ổ đĩa**.
-   Nó định nghĩa **cách dữ liệu được tổ chức thành tệp và thư mục** trên đĩa cứng, SSD, hoặc thiết bị lưu trữ khác.

## 🔹 2. Các loại File System phổ biến trong Linux

| Tên                         | Mô tả                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **ext2/ext3/ext4**          | Hệ thống tập tin phổ biến nhất trên Linux. `ext4` là phiên bản cải tiến, ổn định, hỗ trợ file lớn và journaling. |
| **XFS**                     | Hiệu suất cao, tốt cho hệ thống lớn, log file.                                                                   |
| **Btrfs**                   | Hệ thống tập tin hiện đại, hỗ trợ snapshot, RAID, kiểm tra lỗi.                                                  |
| **vfat / FAT32 / exFAT**    | Dùng cho USB, tương thích với Windows.                                                                           |
| **NTFS**                    | Hệ thống tập tin của Windows, Linux đọc/ghi được qua `ntfs-3g`.                                                  |
| **tmpfs**                   | Hệ thống tạm trong RAM, thường dùng cho `/tmp`.                                                                  |
| **procfs, sysfs, devtmpfs** | Các pseudo file system dùng cho thông tin hệ thống và kernel                                                     |

## 🔹 3. File System Hierarchy Standard (FHS)

Là chuẩn phân cấp hệ thống tệp trong Linux – quy định **thư mục nào chứa gì**.

Một số thư mục quan trọng:

| Thư mục          | Mục đích                                           |
| ---------------- | -------------------------------------------------- |
| `/`              | Root directory – gốc của toàn bộ hệ thống.         |
| `/bin`           | Các lệnh hệ thống cơ bản dùng cho mọi user.        |
| `/sbin`          | Lệnh dành cho quản trị hệ thống (superuser).       |
| `/etc`           | File cấu hình hệ thống.                            |
| `/home`          | Thư mục người dùng thông thường.                   |
| `/root`          | Thư mục riêng của root user.                       |
| `/var`           | File thay đổi theo thời gian: log, mail, spool.    |
| `/tmp`           | File tạm thời.                                     |
| `/usr`           | Chứa ứng dụng và thư viện dùng chung.              |
| `/lib`, `/lib64` | Chứa các thư viện hệ thống.                        |
| `/dev`           | Thiết bị hệ thống (ổ cứng, USB...) dưới dạng file. |
| `/proc`          | Thông tin tiến trình và kernel (ảo).               |
| `/sys`           | Thông tin hệ thống và kernel (ảo).                 |
| `/mnt`, `/media` | Dùng để mount thiết bị ngoài (USB, ổ CD).          |

## 🔹 4. Mounting và Unmounting

-   **Mount** là quá trình gắn một thiết bị lưu trữ vào một thư mục (mount point) để truy cập.
-   Ví dụ: mount USB vào `/mnt/usb` để sử dụng nội dung trong đó.
-   Lệnh:

    ```bash
    mount /dev/sdb1 /mnt/usb
    umount /mnt/usb
    ```

Khi mount hệ thống tệp, có thể thêm tùy chọn:

```bash
mount -o ro /dev/sdb1 /mnt     # Mount chỉ đọc
mount -o noexec,nosuid,nodev /mnt
```

## 🔹 5. Lệnh quản lý file system quan trọng

| Lệnh                                | Mục đích                                     |
| ----------------------------------- | -------------------------------------------- |
| `lsblk`                             | Liệt kê các block device (ổ đĩa, phân vùng). |
| `df -h`                             | Hiển thị dung lượng đĩa đã dùng/ còn trống.  |
| `du -sh`                            | Xem dung lượng thư mục.                      |
| `mount`, `umount`                   | Gắn/ tháo thiết bị.                          |
| `mkfs`                              | Tạo file system mới (format ổ đĩa).          |
| `fsck`                              | Kiểm tra và sửa lỗi hệ thống tệp.            |
| `blkid`, `parted`, `fdisk`, `lsblk` | Thông tin về phân vùng.                      |
| `tune2fs`, `e2label`                | Quản lý thông tin file system ext.           |

## 🔹 6. Inode là gì?

-   **Inode** là cấu trúc dữ liệu chứa **thông tin metadata** của một file: quyền, chủ sở hữu, kích thước, thời gian tạo, v.v.
-   Không chứa tên file – tên file được lưu trong thư mục liên kết với inode.

## 🔹 7. Hard link vs Symbolic (soft) link

| Hard Link                                   | Symbolic Link                                      |
| ------------------------------------------- | -------------------------------------------------- |
| Trỏ trực tiếp tới inode.                    | Trỏ tới tên file (đường dẫn).                      |
| Cùng inode, giống như bản sao.              | Như shortcut. Không hoạt động nếu file gốc bị xóa. |
| Không hoạt động giữa file system khác nhau. | Có thể dùng giữa file system.                      |

## 🔹 8. Quyền truy cập file

-   Linux dùng 3 loại quyền: **read (r), write (w), execute (x)**.
-   Áp dụng cho 3 nhóm: **user (u), group (g), others (o)**.
-   Lệnh thay đổi:

    ```bash
    chmod 755 filename
    chown user:group filename
    ```

## 🔹 9. Journaling File System

-   Ghi lại các hành động (journal) trước khi thực hiện – giúp khôi phục khi mất điện.
-   `ext3`, `ext4`, `xfs`, `btrfs` đều hỗ trợ journaling.

## 🔹 10. Partition và Logical Volume Manager (LVM)

-   Partition: Chia ổ đĩa thành các phần (dùng công cụ như `fdisk`, `parted`).
-   LVM: Quản lý phân vùng linh hoạt, cho phép thay đổi kích thước phân vùng mà không mất dữ liệu.
